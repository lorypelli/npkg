import { redirect } from '@sveltejs/kit';
import type { Search } from '../../../../types/search.ts';

export async function load({ url }) {
    const q = url.searchParams.get('q');
    let p = url.searchParams.get('page')
    let page = 1;
    if (p) {
        page = parseInt(p);
    }
    const pkg_page = 20
    if (!q) {
        redirect(302, '/search/v/latest');
    }
    const res = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${q}&from=${pkg_page*page-pkg_page}`,
    );
    const pkgs: Search = await res.json();
    const pages: number[] = []
    const lastPage = Math.ceil(pkgs.total/20)
    for (let i = 0; i < (lastPage - page > 24 ? 24 : lastPage - page); i++) {
        pages.push(page+i)
    }
    return {
        ...pkgs,
        q,
        pages,
        lastPage
    };
}
