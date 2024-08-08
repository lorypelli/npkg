import { error } from '@sveltejs/kit';
import type { Code } from '../../../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg || !v) {
        error(404);
    }
    const code = await fetch(
        `https://api.npkg.lorypelli.dev/pkg/${encodeURIComponent(pkg)}/${v}/code`,
    );
    if (!code.ok) {
        error(404);
    }
    const pkg_code: Code = await code.json();
    return {
        ...pkg_code,
    };
}
