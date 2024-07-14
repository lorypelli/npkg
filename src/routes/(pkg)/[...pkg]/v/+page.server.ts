import { error } from '@sveltejs/kit';
import type { General } from '../../../../../types/package.ts';

export async function load({ params: { pkg } }) {
    if (!pkg) {
        error(404);
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`);
    if (general.status != 200) {
        error(404);
    }
    const pkg_general: General = await general.json();
    return {
        pkg,
        tags: pkg_general['dist-tags'],
        versions: pkg_general.versions,
        time: pkg_general.time,
    };
}
