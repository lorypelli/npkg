import { error } from '@sveltejs/kit';
import type { Version } from '../../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg) {
        error(404);
    }
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    if (version.status != 200) {
        error(404);
    }
    const pkg_version: Version = await version.json();
    return {
        ...pkg_version,
        v,
    };
}
