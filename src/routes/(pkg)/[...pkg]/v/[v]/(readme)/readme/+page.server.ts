import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import type { Code } from '../../../../../../../../types/package.ts';

export async function load({ params: { pkg, v } }) {
    const md = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
        }),
    );
    let readme = 'No README Found!';
    const code = await fetch(
        `https://www.npmjs.com/package/${pkg}/v/${v}/index`,
    );
    const pkg_code: Code = await code.json();
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
    };
}
