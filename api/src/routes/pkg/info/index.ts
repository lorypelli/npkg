import type { Context } from 'hono';
import type { Version } from '../../../../../types/package';

export default async function info(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return
    }
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    if (version.status != 200) {
        return
    }
    const pkg_version: Version = await version.json();
    return ctx.json({
        ...pkg_version,
        v,
    });
}
