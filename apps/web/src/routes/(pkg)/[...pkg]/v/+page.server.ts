import { BASE_URL } from '$lib/utils/url.ts';
import type { General } from '@npkg/types';
import { error } from '@sveltejs/kit';

export async function load({ params: { pkg } }) {
    if (!pkg) {
        error(404);
    }
    const versions = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/versions`,
    );
    if (!versions.ok) {
        error(404);
    }
    const pkg_versions: General = await versions.json();
    return pkg_versions;
}
