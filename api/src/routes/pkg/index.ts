import { Hono } from 'hono';
import info from './info';

export const pkg = new Hono();
pkg.get('/:pkg/:v', info);
