import { Hono } from 'hono';
import md5 from 'crypto-js/md5';
import downloads from './routes/downloads';
import pkg from './routes/pkg';
import search from './routes/search';

const app = new Hono();

app.get('/', ({ redirect }) => redirect('https://npkg.lorypelli.dev/'));
app.get('/search', search);
app.get('/downloads', downloads);
app.get('/avatar', async (ctx) => {
    const { email, size } = ctx.req.query();
    const emailHash = email ? md5(email) : '';
    const res = await fetch(
        `https://s.gravatar.com/avatar/${emailHash}?d=retro&s=${size || '32'}`,
    );
    if (!res.ok) {
        return ctx.json({ error: res.statusText }, 500);
    }
    return ctx.body(await res.arrayBuffer());
});
app.route('/pkg', pkg);

export default app;
