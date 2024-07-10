import { redirect } from '@sveltejs/kit';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import type { Code, Version } from '../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    if (!pkg) {
        redirect(302, '/');
    }
    const version = await fetch(`https://registry.npmjs.com/${pkg}/${v}`);
    const pkg_version: Version = await version.json();
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${pkg_version.version}/index`,
    );
    const pkg_code: Code = await code.json();
    const md = new Marked(
        markedHighlight({
            highlight(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return '';
            },
        }),
    );
    let readme = 'No README Found!';
    for (let f in pkg_code.files) {
        if (f.startsWith('/README')) {
            const res = await fetch(
                `https://www.npmjs.com/package/${pkg}/file/${pkg_code.files[f].hex}`,
            );
            readme = md.parse(await res.text()).toString();
        }
    }
    return {
        readme,
        ...pkg_version,
        v,
    };
}
