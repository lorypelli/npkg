import type { Context } from 'hono';
import type { NPMSearch, Search } from '../../../../types/search.ts';

export default async function search(ctx: Context) {
    const { q, p } = ctx.req.query();
    if (!q) {
        return ctx.json({ error: "Missing Paramethers" }, 400);
    }
    let page = 1;
    if (p) {
        page = parseInt(p);
    }
    const pkg_page = 20;
    const search = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${q}&from=${pkg_page * (page - 1)}`,
    );
    if (!search.ok) {
        return ctx.json({ error: search.statusText }, 500);
    }
    const pkgs: NPMSearch = await search.json();
    const packages: Search['packages'] = [];
    const lastPage = Math.ceil(pkgs.total / 20);
    for (let pkg of pkgs.objects) {
        packages.push({
            date: pkg.package.date,
            description: pkg.package.description || '',
            keywords: pkg.package.keywords || [],
            name: pkg.package.name,
            publisher: pkg.package.publisher,
            version: pkg.package.version,
        });
    }
    return ctx.json({
        lastPage,
        packages,
        q,
    });
}
