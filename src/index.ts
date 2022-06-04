import p5 from 'p5';

import { e_5_23_01 as currentSketch } from './sketches/gettingStartedP5';

const rootNode = document.getElementById('root') ?? undefined;

new p5(currentSketch, rootNode);
