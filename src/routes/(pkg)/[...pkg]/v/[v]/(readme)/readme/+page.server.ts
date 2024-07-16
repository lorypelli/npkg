import { error } from '@sveltejs/kit';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

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
    const readme = await fetch(
        `https://api.npkg.lorypelli.dev/pkg/${pkg}/${v}/readme`,
    );
    if (!readme.ok) {
        error(404);
    }
    const pkg_readme = md.parse(await readme.text()).toString();
    return {
        pkg_readme,
    };
}
