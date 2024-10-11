import { BASE_URL } from '$lib/utils/url.ts';
import { error } from '@sveltejs/kit';
import type { File, NPMCode } from '../../../../../../../../types/package.ts';

export async function load({ params: { pkg, v, f }, url }) {
    let hex = url.searchParams.get('hex');
    if (!pkg || !v || !f) {
        error(404);
    }
    if (!hex) {
        const code = await fetch(
            `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
        );
        if (!code.ok) {
            error(404);
        }
        const pkg_code: NPMCode = await code.json();
        for (let file in pkg_code.files) {
            if (file.slice(1) == f) {
                hex = pkg_code.files[file].hex;
            }
        }
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
