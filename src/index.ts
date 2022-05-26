import p5 from 'p5';

import { e_4_12 } from './sketches/gettingStartedP5';

let currentSketch = e_4_12;

const rootNode = document.getElementById('root') ?? undefined;

new p5(currentSketch, rootNode);
