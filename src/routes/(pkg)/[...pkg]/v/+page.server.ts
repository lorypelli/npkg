import { error } from '@sveltejs/kit';
import type { General } from '../../../../../types/package.ts';

export async function load({ params: { pkg } }) {
    if (!pkg) {
        error(404);
    }
    const versions = await fetch(
        `https://api.npkg.lorypelli.dev/pkg/${encodeURIComponent(pkg)}/versions`,
    );
    if (!versions.ok) {
        error(404);
    }
    const pkg_versions: General = await versions.json();
    return {
        ...pkg_versions,
    };
}
