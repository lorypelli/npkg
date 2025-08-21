import type { Entries, NPMGeneral } from '@npkg/types';
import type { Context } from 'hono';

export default async function versions(ctx: Context) {
    const { pkg } = ctx.req.param();
    if (!pkg) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`);
    if (!general.ok) {
        return ctx.json({ error: general.statusText }, 500);
    }
    const pkg_general: NPMGeneral = await general.json();
    const versions: Entries[] = [];
    const time_keys = Object.keys(pkg_general.time);
    const version_keys = Object.keys(pkg_general.versions);
    for (let i = 0; i < time_keys.length; i++) {
        if (time_keys.includes(version_keys[i])) {
            versions.push({
                [version_keys[i]]: pkg_general.time[time_keys[i]],
            });
        }
    }
    return ctx.json({
        pkg,
        tags: pkg_general['dist-tags'],
        versions: versions.reverse(),
    });
}
