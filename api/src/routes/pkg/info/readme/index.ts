import type { Context } from 'hono';
import type { NPMCode } from '../../../../../../types/package.ts';

export default async function readme(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return ctx.notFound();
    }
    let pkg_readme = 'No README Found!';
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
    );
    if (!code.ok) {
        return ctx.notFound();
    }
    const pkg_code: NPMCode = await code.json();
    for (let f in pkg_code.files) {
        if (/^readme(\.(txt|md))?$/i.test(f.slice(1))) {
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
