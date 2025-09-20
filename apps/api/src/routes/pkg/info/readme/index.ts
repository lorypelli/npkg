import type { NPMCode } from '@npkg/types';
import type { Context } from 'hono';
import micromatch from 'micromatch';

export default async function readme(ctx: Context) {
    const { pkg, v } = ctx.req.param();
    if (!pkg || !v) {
        return ctx.json({ error: 'Missing Paramethers' }, 400);
    }
    let pkg_readme = 'No README Found!';
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
        {
            headers: {
                'User-Agent': 'npkg',
            },
        },
    );
    if (!code.ok) {
        return ctx.json({ error: code.statusText }, 500);
    }
    const pkg_code: NPMCode = await code.json();
    const files = micromatch(
        Object.keys(pkg_code.files),
        ['/readme', '/readme.md', '/readme.txt'],
        { nocase: true },
    );
    for (let f of files) {
        const readme = await fetch(
            `https://www.npmjs.com/package/${pkg}/file/${pkg_code.files[f].hex}`,
            {
                headers: {
                    'User-Agent': 'npkg',
                },
            },
        );
        if (!readme.ok) {
            return ctx.json({ error: readme.statusText }, 500);
        }
        pkg_readme = await readme.text();
        break;
    }
    return ctx.text(pkg_readme);
}
