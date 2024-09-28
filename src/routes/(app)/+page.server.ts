import { BASE_URL } from '$lib/utils/url.js';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
    const range = url.searchParams.get('range');
    if (range) {
        const downloads = await fetch(`${BASE_URL}/downloads?range=${range}`);
        if (!downloads.ok) {
            error(404);
        }
        const pkg_downloads = await downloads.text();
        return {
            range,
            downloads: parseInt(pkg_downloads),
        };
    }
}
