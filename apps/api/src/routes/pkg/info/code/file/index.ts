import type { Context } from 'hono';

export default async function file(ctx: Context) {
    const { pkg, v, f } = ctx.req.param();
    if (!pkg || !v || !f) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    const file = await fetch(`https://www.npmjs.com/package/${pkg}/file/${f}`, {
        headers: {
            'User-Agent': 'npkg',
        },
    });
    if (!file.ok) {
        return ctx.json({ error: file.statusText }, 500);
    }
    const pkg_file = await file.text();
    return ctx.json({
        file: f,
        pkg,
        pkg_file,
        version: v,
    });
}
