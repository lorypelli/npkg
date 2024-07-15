import { Hono } from 'hono';
import { pkg } from './routes/pkg';
const app = new Hono();
app.get('/', ({ redirect }) => redirect('https://npkg.lorypelli.dev/'));
app.route('/pkg', pkg);
export default app;
