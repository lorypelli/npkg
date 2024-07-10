import { redirect } from '@sveltejs/kit';
import type { Package } from '../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const res = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    const pkgs: Package = await res.json();
    return {
        ...pkgs,
        v,
    };
}
