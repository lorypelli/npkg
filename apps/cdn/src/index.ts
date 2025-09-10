import { Hono } from 'hono';
import { md5 } from 'hono/utils/crypto';

const app = new Hono();

app.get('/', async (ctx) => {
    const { email, size } = ctx.req.query();
    const emailHash = email ? (await md5(email)) || '' : '';
    const res = await fetch(
        `https://s.gravatar.com/avatar/${emailHash}?d=retro&s=${size || '128'}`,
    );
    if (!res.ok) {
        return ctx.json({ error: res.statusText }, 500);
    }
    ctx.header('Content-Type', res.headers.get('Content-Type') || '');
    return ctx.body(await res.arrayBuffer());
});

export default app;
