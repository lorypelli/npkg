import type { Context } from 'hono';
import type { NPMSearch, Search } from '../../../../types/search.ts';

export default async function search(ctx: Context) {
    const flag = ctx.req.query('suggestions');
    let suggestions = false;
    if (flag != undefined) {
        ctx.header('Access-Control-Allow-Origin', '*');
        suggestions = true;
    }
    const { q, p, size } = ctx.req.query();
    if (!q) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    let page = 1;
    if (p) {
        page = parseInt(p);
    }
    let pkg_page = 20;
    if (size) {
        pkg_page = parseInt(size);
    }
    let from = pkg_page * (page - 1);
    if (suggestions) {
        from = 0;
    }
    const search = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${q}&from=${from}`,
    );
    if (!search.ok) {
        return ctx.json({ error: search.statusText }, 500);
    }
    const pkgs: NPMSearch = await search.json();
    const packages: Search['packages'] = [];
    for (let i = 0; i < pkg_page; i++) {
        if (pkgs.objects[i]) {
            packages.push({
                date: pkgs.objects[i].package.date,
                description: pkgs.objects[i].package.description || '',
                keywords: pkgs.objects[i].package.keywords || [],
                name: pkgs.objects[i].package.name,
                publisher: pkgs.objects[i].package.publisher,
                version: pkgs.objects[i].package.version,
            });
        }
    }
    if (!suggestions) {
        const lastPage = Math.ceil(pkgs.total / pkg_page);
        return ctx.json({
            lastPage,
            packages,
            q,
        });
    } else {
        return ctx.json(packages);
    }
}
