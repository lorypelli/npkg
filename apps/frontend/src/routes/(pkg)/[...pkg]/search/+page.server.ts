import { BASE_URL } from '$lib/utils/url.ts';
import type { Search } from '@npkg/types';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
    const q = url.searchParams.get('q');
    const p = url.searchParams.get('page') || '1';
    if (!q) {
        redirect(302, '/search');
    } else if (q.length < 2 || q.length > 64) {
        redirect(302, `/${q}`);
    }
    const res = await fetch(`${BASE_URL}/search?q=${q}&p=${p}`);
    const pkgs: Search = await res.json();
    return {
        ...pkgs,
        currentPage: parseInt(p),
    };
}
