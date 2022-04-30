import p5 from 'p5';

import { ribsSketch } from './sketches/custom';

const rootNode = document.getElementById('root') ?? undefined;

new p5(ribsSketch, rootNode);
