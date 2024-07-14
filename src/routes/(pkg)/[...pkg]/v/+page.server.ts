import { redirect } from '@sveltejs/kit';
import type { General } from '../../../../../types/package.ts';

export async function load({ params: { pkg } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`);
    if (general.status != 200) {
        redirect(302, '/');
    }
    const pkg_general: General = await general.json();
    return {
        pkg,
        tags: pkg_general['dist-tags'],
        versions: pkg_general.versions,
        time: pkg_general.time,
    };
}
