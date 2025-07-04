import { error } from '@sveltejs/kit';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { BASE_URL } from '../../../../../../../lib/utils/url.ts';

export const csr = false;

export async function load({ params: { pkg, v } }) {
    if (!pkg || !v) {
        error(404);
    }
    const md = new Marked(
        markedHighlight({
            langPrefix: 'hljs lang-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'txt';
                return hljs.highlight(code, { language }).value;
            },
        }),
    );
    const readme = await fetch(
        `${BASE_URL}/pkg/${encodeURIComponent(pkg)}/${v}/readme`,
    );
    if (!readme.ok) {
        error(404);
    }
    const pkg_readme = await md.parse(await readme.text());
    return {
        pkg_readme,
    };
}
