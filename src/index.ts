import p5 from 'p5';

// import { e_6_5_2 as currentSketch } from './sketches/gettingStartedP5';
// import { random_points as currentSketch } from './sketches/random';
import { bezier_sketch as currentSketch } from './sketches/aPrimerOnBezierCurves';

const rootNode = document.getElementById('root') ?? undefined;

new p5(currentSketch, rootNode);
