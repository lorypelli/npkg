import { BASE_URL } from '$lib/utils/url.ts';
import { error } from '@sveltejs/kit';
import type { Version } from '../../../../../../types/package.ts';

export async function load({ url, params: { pkg, v } }) {
    if (!pkg || !v) {
        error(404);
    }
    const version = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}`,
    );
    if (!version.ok) {
        error(404);
    }
    const pkg_version: Version = await version.json();
    const range = url.searchParams.get('range');
    if (range) {
        const downloads = await fetch(
            `${BASE_URL}/downloads?q=${pkg}&range=${range}`,
        );
        if (!downloads.ok) {
            return {
                ...pkg_version,
                range,
                downloads: -1,
            };
        }
        const pkg_downloads = await downloads.text();
        return {
            ...pkg_version,
            range,
            downloads: parseInt(pkg_downloads),
        };
    }
    return {
        ...pkg_version,
    };
}
