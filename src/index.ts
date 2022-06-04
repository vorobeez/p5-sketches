import p5 from 'p5';

import { e_6_1_2 as currentSketch } from './sketches/gettingStartedP5';

const rootNode = document.getElementById('root') ?? undefined;

new p5(currentSketch, rootNode);
