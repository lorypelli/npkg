import type { Context } from 'hono';

export default async function file(ctx: Context) {
    const { pkg, v, f } = ctx.req.param();
    if (!pkg || !v || !f) {
        return ctx.notFound();
    }
    const file = await fetch(`https://www.npmjs.com/package/${pkg}/file/${f}`);
    if (!file.ok) {
        return ctx.notFound();
    }
    const pkg_file = await file.text();
    return ctx.json({
        file: f,
        pkg,
        pkg_file,
        version: v,
    });
}
