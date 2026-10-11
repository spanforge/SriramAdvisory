"""Read-only checks of repository and captured production routes against a local build."""
from pathlib import Path
import csv, json, urllib.request, urllib.error, urllib.parse, xml.etree.ElementTree as ET

base = 'http://127.0.0.1:3100'
origin = 'https://www.sriramadvisory.com'
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
production = ET.parse('docs/production-sitemap.xml')
live_paths = [urllib.parse.urlsplit(node.text).path or '/' for node in production.findall('.//s:loc', ns)]
with Path('docs/route-migration.csv').open(encoding='utf8', newline='') as handle:
    rows = list(csv.DictReader(handle))
by_path = {row['old URL'] or row['new URL']: row for row in rows if not (row['old URL'] or row['new URL']).startswith('/_')}
prerender = json.loads(Path('.next/prerender-manifest.json').read_text(encoding='utf8'))
paths = set(live_paths) | {path for path in prerender['routes'] if not path.startswith('/_') and path not in ['/opengraph-image', '/robots.txt', '/sitemap.xml']}
for route in paths:
    if route not in by_path:
        by_path[route] = {'old URL': route if route in live_paths else '', 'action': 'retain' if route in live_paths else 'create', 'new URL': route, 'canonical': origin + ('' if route == '/' else route), 'reason': 'Captured production sitemap and concrete prerender route inventory', 'test status': 'pending'}

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl): return None
opener = urllib.request.build_opener(NoRedirect)
results = []
for path, row in sorted(by_path.items()):
    if '[' in path:
        row['test status'] = 'Route template; concrete content rows tested separately'
        continue
    try:
        try:
            response = opener.open(base + path, timeout=20)
        except urllib.error.HTTPError as error:
            response = error
        status = response.code
        location = response.headers.get('Location', '')
        if status in [301, 302, 307, 308]:
            target = urllib.parse.urljoin(base, location)
            final = urllib.request.urlopen(target, timeout=20)
            row['action'] = 'redirect'
            row['new URL'] = urllib.parse.urlsplit(target).path
            row['canonical'] = origin + row['new URL']
            row['test status'] = f'Local {status} -> {final.code}; inherited redirects require final migration review' if status != 301 else f'Local 301 -> {final.code}'
            passed = final.code == 200
        else:
            row['test status'] = f'Local HTTP {status}'
            passed = status == 200
        results.append({'path': path, 'status': status, 'location': location, 'pass': passed, 'productionListed': path in live_paths})
    except Exception as error:
        row['test status'] = 'Local route check failed: ' + type(error).__name__
        results.append({'path': path, 'pass': False, 'error': type(error).__name__})

with Path('docs/route-migration.csv').open('w', encoding='utf8', newline='') as handle:
    writer = csv.DictWriter(handle, fieldnames=['old URL', 'action', 'new URL', 'canonical', 'reason', 'test status'])
    writer.writeheader(); writer.writerows(row for _, row in sorted(by_path.items()))
Path('docs/route-verification.json').write_text(json.dumps({'productionSitemapCaptured': '2026-10-11', 'productionPaths': len(live_paths), 'results': results}, indent=2)+'\n', encoding='utf8')
failures = [r for r in results if not r['pass']]
print(f'{len(results)} local routes checked; {len(live_paths)} production sitemap paths reconciled; {len(failures)} failures.')
for failure in failures: print(failure)
raise SystemExit(bool(failures))
