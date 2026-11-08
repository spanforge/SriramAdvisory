import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

// Run against an installed Chrome with --remote-debugging-port=9223.
const target = await (await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' })).json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let nextId = 0;
const pending = new Map();
socket.onmessage = event => {
  const message = JSON.parse(event.data);
  const waiter = pending.get(message.id);
  if (waiter) {
    pending.delete(message.id);
    if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
    else waiter.resolve(message.result);
  }
};
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
async function ready() {
  await evaluate(`new Promise(resolve => {
    const done = async () => { await Promise.all([...document.images].map(img => img.decode().catch(() => {}))); await document.fonts.ready; requestAnimationFrame(() => requestAnimationFrame(resolve)); };
    if (document.readyState === 'complete') done(); else window.addEventListener('load', done, { once: true });
  })`);
}
await mkdir(new URL('../.qa/', import.meta.url), { recursive: true });
try {
  await call('Page.enable');
  // Compose a sharing card with the unmodified approved logo images.
  await call('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  const brands = await Promise.all([['think-sriram','Think Sriram'],['ainternals','AInternals'],['adoptrivo','Adoptrivo']].map(async ([file, name]) => {
    const bytes = await readFile(new URL(`../assets/${file}.webp`, import.meta.url));
    return `<div class="brand"><img src="data:image/webp;base64,${bytes.toString('base64')}" alt="${name}"><h2>${name}</h2></div>`;
  }));
  const socialHtml = `<!doctype html><html><head><meta charset="utf-8"><style>
    *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#fafaf8;color:#182620;font-family:Arial,Helvetica,sans-serif;padding:50px 64px}
    h1{font-size:48px;letter-spacing:-2px;margin:0 0 12px;text-align:center}p{text-align:center;color:#58645d;font-size:21px;margin:0}
    .brands{display:flex;gap:24px;margin-top:36px}.brand{flex:1;text-align:center;background:white;border:1px solid #dfe4df;border-radius:10px;padding:22px}
    img{width:184px;height:184px;object-fit:contain}h2{font-size:24px;margin:16px 0 0}footer{text-align:center;margin-top:26px;color:#58645d;font-size:18px}
    </style></head><body><h1>Sriram Advisory</h1><p>Independent initiatives in business, AI economics, and technology adoption.</p><div class="brands">${brands.join('')}</div><footer>sriramadvisory.com</footer></body></html>`;
  await call('Page.navigate', { url: `data:text/html;charset=utf-8,${encodeURIComponent(socialHtml)}` });
  await ready();
  assert.equal(await evaluate('[...document.images].every(image => image.naturalWidth > 0)'), true);
  const social = await call('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  await writeFile(new URL('../assets/social-preview.png', import.meta.url), Buffer.from(social.data, 'base64'));

  const results = [];
  for (const width of [320, 375, 768, 1024, 1099, 1100, 1440]) {
    await call('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false });
    await call('Page.navigate', { url: 'http://localhost:3002/' });
    await ready();
    const result = await evaluate(`(() => {
      const cards = [...document.querySelectorAll('.initiative')];
      const rect = selector => [...document.querySelectorAll(selector)].map(el => { const r = el.getBoundingClientRect(); return {x:r.x,y:r.y,width:r.width,height:r.height}; });
      return {width:innerWidth,overflow:document.documentElement.scrollWidth > innerWidth,columns:getComputedStyle(document.querySelector('.initiatives')).gridTemplateColumns.split(' ').length,images:[...document.images].every(img => img.naturalWidth > 0),logos:rect('.logo'),actions:rect('.website-link'),descriptions:rect('.description'),cards:rect('.initiative')};
    })()`);
    assert.equal(result.overflow, false, `Overflow at ${width}px`);
    assert.equal(result.images, true, `Missing images at ${width}px`);
    assert.equal(result.columns, width >= 1100 ? 3 : 1);
    assert.ok(result.actions.every(action => action.height >= 44));
    assert.ok(result.logos.every(logo => logo.width <= 176));
    if (width >= 1100) {
      assert.ok(Math.max(...result.actions.map(r => r.y)) - Math.min(...result.actions.map(r => r.y)) < 1, 'Buttons should align');
      assert.ok(Math.max(...result.descriptions.map(r => r.y)) - Math.min(...result.descriptions.map(r => r.y)) < 1, 'Descriptions should align');
    }
    const shot = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    await writeFile(new URL(`../.qa/${width}.png`, import.meta.url), Buffer.from(shot.data, 'base64'));
    results.push(result);
  }
  // A 1440px desktop at 200% browser zoom has 720 CSS pixels available.
  await call('Emulation.setDeviceMetricsOverride', { width: 720, height: 450, deviceScaleFactor: 2, mobile: false });
  await ready();
  assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth'), true, '200% zoom equivalent reflow');
  await call('Page.navigate', { url: 'http://localhost:3002/' });
  await ready();
  await call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  await call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  const focus = await evaluate(`({label:document.activeElement.textContent,visible:document.activeElement.matches(':focus-visible'),outline:getComputedStyle(document.activeElement).outlineWidth})`);
  assert.ok(focus.label.includes('Visit Think Sriram'));
  assert.equal(focus.visible, true);
  assert.equal(focus.outline, '3px');
  await writeFile(new URL('../.qa/results.json', import.meta.url), JSON.stringify({ results, zoomEquivalentReflow: true, keyboardFocus: focus }, null, 2));
  console.log('PASS: 7 viewport widths, aligned desktop content and buttons, logo limits, 200% zoom equivalent reflow, and visible keyboard focus.');
} finally {
  await call('Page.close');
  socket.close();
}
