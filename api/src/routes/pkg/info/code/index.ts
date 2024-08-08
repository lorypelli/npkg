import type { Context } from 'hono';
import type { NPMCode } from '../../../../../../types/package.ts';

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
    const pkg_code: NPMCode = await code.json();
    return ctx.json({
        code: pkg_code['files'],
        pkg,
        version: v,
    });
}
