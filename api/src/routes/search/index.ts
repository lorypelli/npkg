import type { Context } from 'hono';
import type { NPMSearch, Search } from '../../../../types/search.ts';

export default async function search(ctx: Context) {
    const { q, p } = ctx.req.query();
    let page = 1;
    if (p) {
        page = parseInt(p);
    }
    const pkg_page = 20;
    const search = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${q}&from=${pkg_page * (page - 1)}`,
    );
    if (!search.ok) {
        return ctx.notFound();
    }
    const pkgs: NPMSearch = await search.json();
    const packages: Search['packages'] = [];
    const pages: number[] = [];
    const lastPage = Math.ceil(pkgs.total / 20);
    for (let i = 0; i < pkgs.objects.length; i++) {
        packages.push({
            date: pkgs.objects[i].package.date,
            description: pkgs.objects[i].package.description || '',
            keywords: pkgs.objects[i].package.keywords || [],
            name: pkgs.objects[i].package.name,
            publisher: pkgs.objects[i].package.publisher,
            version: pkgs.objects[i].package.version,
        });
    }
    for (let i = 0; i < (lastPage - page > 24 ? 24 : lastPage - page); i++) {
        pages.push(page + i);
    }
    return ctx.json({
        lastPage,
        packages,
        pages,
        q,
    });
}
