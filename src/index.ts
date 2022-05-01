import p5 from 'p5';

import { p_1_0_01 } from './sketches/color';

const rootNode = document.getElementById('root') ?? undefined;

new p5(p_1_0_01, rootNode);
