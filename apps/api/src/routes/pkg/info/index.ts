import type { Context } from 'hono';
import type { Version } from '../../../../../types/package.ts';

export default async function info(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    if (!version.ok) {
        return ctx.json({ error: version.statusText }, 500);
    }
    const pkg_version: Version = await version.json();
    return ctx.json(pkg_version);
}
