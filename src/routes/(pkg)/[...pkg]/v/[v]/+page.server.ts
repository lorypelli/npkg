import { error } from '@sveltejs/kit';
import type { Version } from '../../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg || !v) {
        error(404);
    }
    const version = await fetch(
        `https://api.npkg.lorypelli.dev/pkg/${encodeURIComponent(pkg)}/${v}`,
    );
    if (!version.ok) {
        error(404);
    }
    const pkg_version: Version = await version.json();
    return {
        ...pkg_version,
        v,
    };
}
