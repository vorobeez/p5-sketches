import p5 from 'p5';

const GAP_DELTA = 0.5;

export const ribsSketch = (p: p5) => {
  let gap = 16;
  let waveIsRunning = false;

  p.setup = () => {
    p.createCanvas(1200, 480);
    p.strokeWeight(2);
    p.frameRate(15);
    p.noCursor();

    const descriptionContainer = p.createDiv();
    descriptionContainer.style('font-size', '20px');
    descriptionContainer.child(p.createP('Control this sketch with a mouse'));
    descriptionContainer.child(p.createP('Mouse to change center'));
    descriptionContainer.child(p.createP('Wheel to adjust gap between ribs'));
    descriptionContainer.child(p.createP('Press to run a wave'));
  };

  p.draw = () => {
    p.background(204);

    for (let i = 0; i < (p.width / gap); i += 1) {
      let rand = 1;
      const realX = i * gap;
      const distanceFromCenter = (realX - p.mouseX);

      if (waveIsRunning) {
        const sd = Math.abs(distanceFromCenter) * 0.0001;
        rand = p.randomGaussian(1, sd);
      }

      const endX = realX + (distanceFromCenter * 0.5);
      const endY = p.mouseY * rand;


      p.line(i * gap, 0, endX, endY);
      p.line(i * gap, p.height, endX, endY);
    }

  };

  p.mouseWheel = (event: { delta: number }) => {
    gap = Math.max(
      2,
      Math.min(100, gap - GAP_DELTA * Math.sign(event.delta))
    );
  };

  p.mousePressed = () => {
    waveIsRunning = true;
  };

  p.mouseReleased = () => {
    waveIsRunning = false;
  };
};
