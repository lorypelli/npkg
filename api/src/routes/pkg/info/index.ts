import type { Context } from 'hono';
import type { Version } from '../../../../../types/package.ts';

export default async function info(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return ctx.notFound();
    }
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    if (!version.ok) {
        return ctx.notFound();
    }
    const pkg_version: Version = await version.json();
    return ctx.json({
        ...pkg_version,
    });
}
