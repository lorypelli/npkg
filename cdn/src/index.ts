import md5 from 'crypto-js/md5';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (ctx) => {
    const email = ctx.req.query('email');
    const emailHash = email ? md5(email) : '';
    const res = await fetch(
        `https://s.gravatar.com/avatar/${emailHash}?d=retro`,
    );
    if (!res.ok) {
        return ctx.json({ error: res.statusText }, 500);
    }
    return ctx.body(await res.arrayBuffer());
});

export default app;
