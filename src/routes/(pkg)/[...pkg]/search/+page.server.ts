import { redirect } from '@sveltejs/kit';
import type { Search } from '../../../../../types/search.ts';

export async function load({ url }) {
    const q = url.searchParams.get('q');
    const p = url.searchParams.get('page') || '1';
    if (!q) {
        redirect(302, '/search/v/latest');
    }
    const res = await fetch(
        `https://api.npkg.lorypelli.dev/search?q=${q}&p=${p}`,
    );
    const pkgs: Search = await res.json();
    return {
        ...pkgs,
    };
}
