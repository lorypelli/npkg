import { BASE_URL } from '$lib/utils/url.ts';
import { error, redirect } from '@sveltejs/kit';
import type { File } from '../../../../../../../../types/package.ts';

export async function load({ parent, params: { pkg, v, f } }) {
    const { code } = await parent();
    const fname = '/' + f;
    if (!pkg || !v || !f) {
        error(404);
    }
    if (!code[fname]) {
        redirect(302, `/${pkg}/v/${v}/code`);
    }
    const file = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}/code/${code[fname].hex}`,
    );
    if (!file.ok) {
        redirect(302, `/${pkg}/v/${v}/code`);
    }
    const pkg_file: File = await file.json();
    return {
        ...pkg_file,
        fname: f,
    };
}
