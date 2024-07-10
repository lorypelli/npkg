import { redirect } from '@sveltejs/kit';
import type { Search } from '../../../../types/search.ts';

export async function load({ url, fetch }) {
    const q = url.searchParams.get('q');
    if (!q) {
       redirect(302, "/search/v/latest")
    }
    const res = await fetch(`https://registry.npmjs.com/-/v1/search?text=${q}&size=${BigInt(Number.MAX_VALUE)}`);
    const pkgs: Search = await res.json();
    return {
        ...pkgs,
        q,
    };
}
