import { BASE_URL } from '$lib/utils/url.ts';
import { error } from '@sveltejs/kit';
import type { Code } from '../../../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg || !v) {
        error(404);
    }
    const code = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}/code`,
    );
    if (!code.ok) {
        error(404);
    }
    const pkg_code: Code = await code.json();
    return {
        ...pkg_code,
    };
}
