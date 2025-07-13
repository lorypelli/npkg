import md5 from 'crypto-js/md5';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (ctx) => {
    const { email, size } = ctx.req.query();
    const emailHash = email ? md5(email) : '';
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
