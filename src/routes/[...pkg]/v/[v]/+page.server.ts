import { redirect } from '@sveltejs/kit';
import type { General, Version } from '../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}/`);
    const pkg_general: General = await general.json();
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    const pkg_version: Version = await version.json();
    return {
        ...pkg_general,
        ...pkg_version,
        v,
    };
}
