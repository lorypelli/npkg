import type { Context } from 'hono';
import { Code } from '../../../../../../types/package.ts';

export default async function readme(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    let pkg_readme = 'No README Found!';
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
    );
    if (!code.ok) {
        return ctx.notFound();
    }
    const pkg_code: Code = await code.json();
    for (let f in pkg_code.files) {
        if (f.startsWith('/README')) {
            const readme = await fetch(
                `https://www.npmjs.com/package/${pkg}/file/${pkg_code.files[f].hex}`,
            );
            if (!readme.ok) {
                return ctx.notFound();
            }
            pkg_readme = await readme.text();
        }
    }
    return ctx.text(pkg_readme);
}
