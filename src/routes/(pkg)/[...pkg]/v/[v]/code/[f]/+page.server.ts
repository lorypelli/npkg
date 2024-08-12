import { BASE_URL } from '$lib/utils/url.ts';
import { error } from '@sveltejs/kit';
import type { File } from '../../../../../../../../types/package.ts';

export async function load({ params: { pkg, v, f }, url }) {
    const hex = url.searchParams.get('hex');
    if (!pkg || !v || !f || !hex) {
        error(404);
    }
    const file = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}/code/${hex}`,
    );
    if (!file.ok) {
        error(404);
    }
    const pkg_file: File = await file.json();
    return {
        ...pkg_file,
        fname: f,
    };
}
