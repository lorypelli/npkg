import type { Context } from 'hono';
import type { NPMDownloads } from '../../../../types/downloads.ts';

export default async function downloads(ctx: Context) {
    const { q, range } = ctx.req.query();
    if (!range) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    let r = '';
    switch (range) {
        case 'd': {
            r = 'last-day';
            break;
        }
        case 'w': {
            r = 'last-week';
            break;
        }
        case 'm': {
            r = 'last-month';
            break;
        }
        case 'y': {
            r = 'last-year';
            break;
        }
    }
    let url = `https://api.npmjs.org/downloads/point/${r}`;
    if (q) {
        url = `https://api.npmjs.org/downloads/point/${r}/${q}`;
    }
    const downloads = await fetch(url);
    if (!downloads.ok) {
        return ctx.json({ error: downloads.statusText }, 500);
    }
    const pkg_downloads: NPMDownloads = await downloads.json();
    return ctx.text(pkg_downloads.downloads.toString());
}
