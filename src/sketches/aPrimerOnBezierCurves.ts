// This sketches inspired by the online book "A Primer on Bézier Curves"
// By Pomax
// Link: https://pomax.github.io/bezierinfo

import p5 from 'p5';

import { createMovablePoint, MovablePoint } from '../utils/movablePoint';
import { binomialCoefficientFactory } from '../utils/binomialCoefficient';

const nCk = binomialCoefficientFactory();

const DELTA = 0.01;

function bezierBase(t: number, weights: number[]): number {
  let result = 0;
  let n = weights.length - 1;

  for (let i = 0; i < weights.length; i++) {
    result += nCk(n, i)
    * Math.pow(t, n - i)
    * Math.pow(1 - t, i) 
    * weights[i];
  }

  return result;
}

function bezier(t: number, weights: [number, number][]): [number, number] {
  return [
    bezierBase(t, weights.map(([x]) => x)),
    bezierBase(t, weights.map(([_, y]) => y))
  ];
}

export const bezier_sketch = (p: p5) => {
  const pointRadius = 10;
  const weightPoints: MovablePoint[] = [];

  let stepsSliderContainer: p5.Element;
  let stepsSlider: p5.Element;
  let stepsSliderInfo: p5.Element;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(204);

    stepsSliderContainer = p.createDiv().position(10, 520);
    stepsSlider = p.createSlider(1, 50, 1);
    stepsSliderInfo = p.createP(`Number of steps: ${stepsSlider.value()}`);

    stepsSliderInfo.parent(stepsSliderContainer);
    stepsSlider.parent(stepsSliderContainer);

    stepsSlider.elt.addEventListener('input', () => {
      stepsSliderInfo.html(`Number of steps: ${stepsSlider.value()}`);
    });

    p.noLoop();
  };

  p.draw = () => {
    p.background(204);

    let numberOfSteps: number = stepsSlider.value() as number;

    for (let w of weightPoints) {
      w.draw(p);
    }

    p.strokeWeight(1);
    p.stroke('black');

    let stepAmount = 1 / numberOfSteps;
    let startT = 0;
    let endT = stepAmount;

    while (endT < 1 + DELTA) {
      const weights = weightPoints.map(w => w.getCoordinates());

      p.line(...bezier(startT, weights), ...bezier(endT, weights));

      startT = endT;
      endT += stepAmount;
    }
  };

  p.mousePressed = () => {
    for (let w of weightPoints) {
      w.mousePressed(p);
    }

    p.loop();
  };

  p.mouseDragged = () => {
    for (let w of weightPoints) {
      w.mouseDragged(p);
    }
  };

  p.mouseReleased = () => {
    for (let w of weightPoints) {
      w.mouseReleased();
    }

    p.noLoop();
  };

  p.doubleClicked = () => {
    p.loop();

    weightPoints.push(
      createMovablePoint(p.mouseX, p.mouseY, pointRadius)
    );

    p.noLoop();
  }
};
