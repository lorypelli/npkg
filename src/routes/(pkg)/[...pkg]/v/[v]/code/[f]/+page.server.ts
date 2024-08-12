import { BASE_URL } from '$lib/utils/url.ts';
import { error } from '@sveltejs/kit';
import type { File } from '../../../../../../../../types/package.ts';

export async function load({ params: { pkg, v, f } }) {
    if (!pkg || !v || !f) {
        error(404);
    }
    const file = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}/code/${f}`,
    );
    if (!file.ok) {
        error(404);
    }
    const pkg_file: File = await file.json();
    return {
        ...pkg_file,
    };
}
