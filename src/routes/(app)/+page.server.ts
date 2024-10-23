import { BASE_URL } from '$lib/utils/url.ts';

export async function load({ url }) {
    const range = url.searchParams.get('range');
    if (range) {
        const downloads = await fetch(`${BASE_URL}/downloads?range=${range}`);
        if (!downloads.ok) {
            return {
                range,
                downloads: -1,
            };
        }
        const pkg_downloads = await downloads.text();
        return {
            range,
            downloads: parseInt(pkg_downloads),
        };
    }
}
