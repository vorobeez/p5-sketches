import p5 from 'p5';

import { Walker, MoveStrategy, DrawStrategy } from '../utils/walker';

export const noise_points = (p: p5) => {
  const THRESHOLD = 0.8;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(204);
    p.ellipseMode(p.CENTER);
    p.noLoop();
  };

  p.draw = () => {
    for (let x = 0; x < 500; x++) {
      for (let y = 0; y < 500; y++) {
        const noiseValue = p.noise(x, y);

        if (noiseValue >= THRESHOLD) {
          p.ellipse(x, y, 1);
        }
      }
    }
  };
};

export const random_points = (p: p5) => {
  const THRESHOLD = 0.98;

  type Point = [number, number];

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(204);
    p.ellipseMode(p.CENTER);
    p.noLoop();
  };

  p.draw = () => {
    const points: Set<Point> = new Set();

    for (let x = 0; x < 500; x++) {
      for (let y = 0; y < 500; y++) {
        const randomValue = p.random();

        if (randomValue >= THRESHOLD) {
          points.add([x, y]);
        }
      }
    }

    let firstPoint: Point | undefined = undefined;
    let secondPoint: Point | undefined = undefined;

    for (let point of points) {
      // p.ellipse(point[0], point[1], 1);

      if (!firstPoint) {
        firstPoint = point;
        continue;
      }

      if (!secondPoint) {
        secondPoint = point;
        continue;
      }

      // придумать бы алгоритм по подбору ближайших точек,
      // но который не будет делать полный перебор по точкам
      // может нужна какая-нибудь структура типа графа
      // или посмотреть алгоритмы поиска пути
      if (firstPoint && secondPoint) {
        p.line(firstPoint[0], firstPoint[1], secondPoint[0], secondPoint[1]);
        firstPoint = undefined;
        secondPoint = undefined;
      }
    }
  };
};

export const gaussian_walker_1 = (p: p5) => {
  const DEVIATION = 0.09;
  const DISTANCE = 3;
  let currentAngle = 0;

  let controllsContainer: p5.Element;
  let stopButton: p5.Element;
  let continueButton: p5.Element;
  let screenshotButton: p5.Element;

  const gaussianAngleMoveStrategy: MoveStrategy = {
    makeMove(position) {
      const nextAngle = p.randomGaussian(currentAngle, DEVIATION);

      currentAngle = nextAngle;

      let nextX = position[0] + DISTANCE * p.cos(nextAngle);
      let nextY = position[1] + DISTANCE * p.sin(nextAngle);

      if (nextX > p.width) {
        nextX = 0;
      }

      if (nextX < 0) {
        nextX = p.width;
      }

      if (nextY > p.height) {
        nextY = 0;
      }

      if (nextY < 0) {
        nextY = p.height;
      }

      return [
        nextX,
        nextY,
      ];
    }
  };

  const rectDrawStrategy: DrawStrategy = {
    draw(position, p) {
      p.rect(position[0], position[1], 30, 30);
    }
  };

  const walker = new Walker(
    250, 250, gaussianAngleMoveStrategy, rectDrawStrategy,
  );

  p.setup = () => {
    const c = p.createCanvas(500, 500);
    p.background(204);
    p.rectMode(p.CENTER);
    p.angleMode(p.RADIANS);
    
    controllsContainer = p.createDiv();
    stopButton = p.createButton('Stop');
    continueButton = p.createButton('Continue');
    screenshotButton = p.createButton('Make screenshot');

    controllsContainer
      .child(stopButton)
      .child(continueButton)
      .child(screenshotButton);

    stopButton.mouseClicked(() => {
      p.noLoop();
    });

    continueButton.mouseClicked(() => {
      p.loop();
    });

    screenshotButton.mouseClicked(() => {
      p.saveCanvas(c, 'gaussianRectWalker', 'jpg');
    });
  };

  p.draw = () => {
    walker.draw(p);
    walker.makeMove();
  };
};
