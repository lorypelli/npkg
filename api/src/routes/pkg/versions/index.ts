import type { Context } from 'hono';
import type { NPMGeneral } from '../../../../../types/package.ts';

export default async function versions(ctx: Context) {
    const { pkg } = ctx.req.param();
    if (!pkg) {
        return ctx.notFound();
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`);
    if (!general.ok) {
        return ctx.notFound();
    }
    const pkg_general: NPMGeneral = await general.json();
    const versions = [];
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
        versions,
    });
}
