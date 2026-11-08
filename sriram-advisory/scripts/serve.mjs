import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const routes = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/robots.txt', ['robots.txt', 'text/plain; charset=utf-8']],
  ['/sitemap.xml', ['sitemap.xml', 'application/xml; charset=utf-8']],
  ['/assets/favicon.svg', ['assets/favicon.svg', 'image/svg+xml']],
  ['/favicon.ico', ['assets/favicon.svg', 'image/svg+xml']],
  ['/assets/social-preview.png', ['assets/social-preview.png', 'image/png']],
  ...['think-sriram', 'ainternals', 'adoptrivo'].map(name => [`/assets/${name}.webp`, [`assets/${name}.webp`, 'image/webp']]),
]);
const port = Number(process.env.PORT || 3000);
createServer(async (request, response) => {
  const route = routes.get(new URL(request.url, 'http://localhost').pathname);
  if (!route || !['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }
  try {
    const body = await readFile(new URL(route[0], root));
    response.writeHead(200, { 'Content-Type': route[1], 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(500);
    response.end('Unable to load file');
  }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://localhost:${port}`));
