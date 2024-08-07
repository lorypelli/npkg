import type { Context } from 'hono';
import type { Code } from '../../../../../../types/package.ts';

export default async function code(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return ctx.notFound();
    }
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
    );
    if (!code.ok) {
        return ctx.notFound();
    }
    const pkg_code: Code = await code.json();
    return ctx.json({
        ...pkg_code['files'],
    });
}
