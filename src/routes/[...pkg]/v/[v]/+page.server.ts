import { redirect } from '@sveltejs/kit';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import type { Code, Version } from '../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const general = await fetch(`https://registry.npmjs.com/${pkg}`)
    const pkg_general = await general.json()
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    if (version.status != 200) {
        redirect(302, '/');
    }
    const pkg_version: Version = await version.json();
    const md = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
              const language = hljs.getLanguage(lang) ? lang : 'plaintext';
              return hljs.highlight(code, { language }).value;
            }
        }),
    );
    let readme = pkg_general.readme
    if (!readme) {
        const code = await fetch(
            `https://www.npmjs.com/package/${pkg}/v/${pkg_version.version}/index`,
        );
        const pkg_code: Code = await code.json();
        for (let f in pkg_code.files) {
            if (f.startsWith('/README')) {
                const res = await fetch(
                    `https://www.npmjs.com/package/${pkg}/file/${pkg_code.files[f].hex}`,
                );
                readme = await res.text();
            }
        }
    }
    readme = md.parse(readme)
    return {
        ...pkg_version,
        ...pkg_general,
        readme,
        v,
    };
}
