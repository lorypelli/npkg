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
    return ctx.json({
        pkg,
        tags: pkg_general['dist-tags'],
        time: pkg_general.time,
    });
}
