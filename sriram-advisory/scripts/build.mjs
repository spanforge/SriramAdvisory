import { mkdir, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'styles.css', 'robots.txt', 'sitemap.xml']) {
  await copyFile(new URL(name, root), new URL(name, output));
}
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
console.log(`Static site built: ${fileURLToPath(output)}`);
