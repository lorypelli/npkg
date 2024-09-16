import type { Context } from 'hono';
import type { Search } from '../../../../types/search.ts';

export default async function suggestions(ctx: Context) {
    ctx.header('Access-Control-Allow-Origin', '*');
    const { q, size } = ctx.req.query();
    if (!q || !size) {
        return ctx.json({ error: "Missing Paramethers" }, 400);
    }
    const suggestions = await fetch(`http://127.0.0.1:8787/search?q=${q}&n=${size}`);
    if (!suggestions.ok) {
        return ctx.json({ error: suggestions.statusText }, 500);
    }
    const pkg_suggestions = (await suggestions.json<Search>()).packages;
    const packages: Search['packages'] = [];
    for (let i = 0; i < parseInt(size); i++) {
        if (pkg_suggestions[i]) {
            packages.push({
                date: pkg_suggestions[i].date,
                description: pkg_suggestions[i].description || '',
                keywords: pkg_suggestions[i].keywords || [],
                name: pkg_suggestions[i].name,
                publisher: pkg_suggestions[i].publisher,
                version: pkg_suggestions[i].version,
            });
        }
    }
    return ctx.json(packages);
}
