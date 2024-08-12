import { BASE_URL } from '$lib/utils/url.ts';
import { redirect } from '@sveltejs/kit';
import type { Search } from '../../../../../types/search.ts';

export async function load({ url }) {
    const q = url.searchParams.get('q');
    const p = url.searchParams.get('page') || '1';
    if (!q) {
        redirect(302, '/search/v/latest#pkg');
    }
    const res = await fetch(`${BASE_URL}/search?q=${q}&p=${p}`);
    const pkgs: Search = await res.json();
    return {
        ...pkgs,
    };
}
