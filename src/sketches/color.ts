// This sketches inspired by the book "Generative Design: Visualize, Program, and Create with JavaScript in p5.js" 
// By Benedikt Gross, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// Link: http://www.generative-gestaltung.de/2/

import p5 from 'p5';

export const p_1_0_01 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(1000, 720);
    p.noCursor();

    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  };

  p.draw = () => {
    p.fill(p.mouseY / 2, 100, 50);
    p.rect(360, 360, 720, 720);
    p.rect(870, 100, 200, 200);
    
    p.fill(360 - p.mouseY / 2, 100, 50);
    p.rect(
      360,
      360,
      Math.min(720, p.mouseX + 1),
      Math.min(720, p.mouseX + 1),
    );
    p.rect(870, 350, 200, 200);
  };
};

export const p_1_0_02 = (p: p5) => {
  const GAP = 100;
  const SUBSKETCH_SIZE = 720;
  const SNAPSHOT_SIZE = 240;

  let snapshots: Array<{
    outerHue: number;
    innerSize: number;
  }>;

  p.setup = () => {
    p.createCanvas(SUBSKETCH_SIZE * 2 + GAP, SUBSKETCH_SIZE);
    p.noCursor();

    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();

    snapshots = [];
  };

  p.draw = () => {
    p.fill(p.mouseY / 2, 100, 50);
    p.rect(SUBSKETCH_SIZE / 2, SUBSKETCH_SIZE /2, SUBSKETCH_SIZE, SUBSKETCH_SIZE);

    p.fill(360 - p.mouseY / 2, 100, 50);
    p.rect(
      SUBSKETCH_SIZE / 2, SUBSKETCH_SIZE / 2,
      Math.min(SUBSKETCH_SIZE, p.mouseX + 1),
      Math.min(SUBSKETCH_SIZE, p.mouseX + 1)
    );

    for (let i = 0; i < 9; i++) {
      let snapshot = snapshots[i];
      const row = Math.floor(i / 3);
      const col = i % 3;
      const centerX = SUBSKETCH_SIZE + GAP + SNAPSHOT_SIZE * col + SNAPSHOT_SIZE / 2;
      const centerY = SNAPSHOT_SIZE * row + SNAPSHOT_SIZE / 2;

      if (snapshot) {
        p.fill(snapshot.outerHue, 100, 50);
        p.rect(
          centerX,
          centerY,
          SNAPSHOT_SIZE,
          SNAPSHOT_SIZE
        );

        p.fill(360 - snapshot.outerHue, 100, 50);
        p.rect(
          centerX,
          centerY,
          snapshot.innerSize * 1/3,
          snapshot.innerSize * 1/3
        );
      } else {
        p.fill(0, 0, 100);
        p.rect(centerX, centerY, SNAPSHOT_SIZE, SNAPSHOT_SIZE);
      }
    }
  };

  p.mouseClicked = () => {
    if (snapshots.length === 9) {
      snapshots = [];
    }

    snapshots.push({
      outerHue: p.mouseY / 2,
      innerSize: Math.min(720, p.mouseX + 1),
    });
  };
};
