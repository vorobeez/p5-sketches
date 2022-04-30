import p5 from 'p5';

export const sketchCh2 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(1200, 120);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

export const sketchCh3 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 600);
  };

  p.draw = () => {
    p.background(204, 204, 204, (p.mouseX + p.mouseY) % 256);
    // p.background(p.mouseX % 256, p.mouseY % 256, (p.mouseX + p.mouseY) % 256);
    p.stroke('purple');
    p.strokeWeight(20);
    p.point(0, 0);
    p.point(0, 600);
    p.point(800, 0);
    p.point(800, 600);
    p.point(400, 300);

    p.fill(0, 0, 0, p.mouseX % 256);
    p.line(0, 0, 800, 600);
    p.strokeWeight(0);
    p.rect(400 - 20, 300 - 20, 40, 40);
    p.arc(400, 300, 100, 100, p.HALF_PI, 2 * p.PI);
    p.ellipse(100, 70, 40, 80);

    p.fill(0);
    p.beginShape();
    p.vertex(0, 0);
    p.vertex(100, 100);
    p.vertex(50, 50);
    p.vertex(100, 50);
    p.vertex(400, 100);
    p.endShape();
  };
};

export const sketchCh4 = (p: p5) => {
  const y = 100;

  let dSlider: p5.Element;

  p.setup = () => {
    p.createCanvas(480, 120);
    dSlider = p.createSlider(0, 255, 130);
    dSlider.position(10, 10);
    dSlider.style('width', '80px');
  };

  p.draw = () => {
    p.background(204);

    const d = dSlider.value() as number;

    for (let i = 0; i < (p.width / 75); i++) {
      p.ellipse(i * 75, y + i * 5, d);
    }
  };
};

export const sketchCh4Lines = (p: p5) => {
  let offsetSlider: p5.Element;
  let deviationSlider: p5.Element;

  p.setup = () => {
    p.createCanvas(1200, 480);
    p.strokeWeight(2);
    offsetSlider = p.createSlider(1, 100, 8);
    offsetSlider.position(10, p.height + 10);
    deviationSlider = p.createSlider(0, 1, 0.001, 0.001);
    deviationSlider.position(10, p.height + 30);
  };

  p.draw = () => {
    p.background(204);

    const offset = offsetSlider.value() as number;

    for (let i = 0; i < p.width; i += offset) {
      const sd = deviationSlider.value() as number;
      const rand = p.randomGaussian(1, sd);
      const endX = i * 1.5;
      const endY = (p.height / 2) * rand ;

      p.line(i, 0, endX, endY);
      p.line(i, p.height, endX, endY);
    }
  };
};
