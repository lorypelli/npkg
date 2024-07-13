import { redirect } from '@sveltejs/kit';
import type { Version } from '../../../../../types/package.ts';

export async function load({ params: { pkg } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`);
    if (general.status != 200) {
        redirect(302, '/');
    }
    const pkg_general: { versions: Version[] } = await general.json();
    return {
        pkg,
        versions: pkg_general.versions,
    }
}
