import { Hono } from 'hono';
import info from './info';
import code from './info/code';
import file from './info/code/file';
import readme from './info/readme';
import versions from './versions';

const pkg = new Hono();
pkg.get('/:pkg/versions', versions);
pkg.get('/:pkg/:v', info);
pkg.get(':pkg/:v/code', code);
pkg.get(':pkg/:v/code/:f', file);
pkg.get('/:pkg/:v/readme', readme);
export default pkg;
