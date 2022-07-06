// This sketches inspired by the book "Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing" 
// By Lauren McCarthy, Casey Reas and Ben Fry
// Link: https://www.amazon.com/Getting-Started-p5-js-Interactive-JavaScript-ebook/dp/B016VF1G3W

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

export const e_4_10 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(480, 120);
    p.noStroke();
    p.noLoop();
  };

  p.draw = () => {
    p.background(0);

    for (let y = 0; y <= p.height; y += 40) {
      for (let x = 0; x <= p.width; x += 40) {
        p.fill(255, 140);
        p.ellipse(x, y, 40, 40);
      }
    }
  };
};

export const e_4_12 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(480, 120);
    p.noLoop();
  };

  p.draw = () => {
    let initialRadius = 16;
    let radius = initialRadius;
    let initialX = 40;

    p.background(0);

    for (let y = 40; y <= p.height; y += initialRadius / 2) {
      for (let x = initialX; x <= p.width; x += initialRadius + 2) {
        p.fill(255);
        p.ellipse(x, y, radius, radius);
      };
      radius *= 0.93;
      initialX += initialRadius / 2;
    }
  };
};

export const e_5_6_01 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(480, 120);
    p.strokeWeight(4);
    p.stroke(0, 102);
  };

  p.draw = () => {
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  };
};

export const e_5_7_01 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(480, 120);
    p.stroke(0, 102);
  };

  p.draw = () => {
    p.strokeWeight(
      p.dist(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
    );
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  };
};

export const e_5_9_01 = (p: p5) => {
  const easing = 0.1;

  let x = 0;
  let y = 0;
  let px = 0;
  let py = 0;

  p.setup = () => {
    p.createCanvas(480, 120);
    p.stroke(0, 102);
  };

  p.draw = () => {
    x += (p.mouseX - x) * easing;
    y += (p.mouseY - y) * easing;

    const weight = p.dist(x, y, px, py);

    p.strokeWeight(weight);
    p.line(x, y, px, py);

    px = x;
    py = y;
  };
};

export const e_5_10_01 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(240, 120);
    p.strokeWeight(30);
  };

  p.draw = () => {
    p.background(204);
    p.stroke(102);
    p.line(40, 0, 70, p.height);

    if (p.mouseIsPressed) {
      p.stroke(0);
    }

    p.line(0, 70, p.width, 50);
  };
};

export const e_5_23_01 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(240, 120);
    p.strokeWeight(12);
  };

  p.draw = () => {
    p.background(204);
    p.stroke(102);
    p.line(p.mouseX, 0, p.mouseX, p.height);
    p.stroke(0);

    const mx = p.map(p.mouseX, 0, p.width, 60, 180);
    // const mx = p.mouseX / 2 + 60;

    p.line(mx, 0, mx, p.height);
  };
};

export const e_6_1_1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(480, 480);
    p.background(204);
  };

  p.draw = () => {
    p.translate(p.mouseX, p.mouseY);
    p.rect(0, 0, 30, 30);
  };
}

export const e_6_1_2 = (p: p5) => {
  let angleIncrement = p.QUARTER_PI / 20;
  let radius = 50;
  let currentAngle = 0;
  let saveButton: p5.Element;

  p.setup = () => {
    p.createCanvas(480, 480);
    p.background(204);
    p.rectMode(p.CENTER);
    // p.noiseSeed(104);

    saveButton = p.createButton('save');
    saveButton.position(10, 500);
    saveButton.mouseClicked(() => {
      p.saveCanvas();
    });
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    let x = p.cos(currentAngle) * radius;
    let y = p.sin(currentAngle) * radius;

    let noise = p.noise(x, y);
    let rectDistortion = p.map(noise, 0, 1, 0.95, 1.05);
    let radiusDistortion = p.map(noise, 0, 1, 1, 1.006);

    p.rect(x * rectDistortion, y * rectDistortion, 30, 30);

    angleIncrement *= 0.999;
    currentAngle += angleIncrement;
    radius *= radiusDistortion;
  };
};

export const e_6_1_3 = (p: p5) => {
  const easing = 0.05;

  let angleIncrement = p.QUARTER_PI;
  let radius = 50;
  let currentAngle = 0;
  let x = 0;
  let y = 0;

  let saveButton: p5.Element;

  p.setup = () => {
    p.createCanvas(480, 480);
    p.background(204);
    p.rectMode(p.CENTER);

    saveButton = p.createButton('save');
    saveButton.position(10, 500);
    saveButton.mouseClicked(() => {
      p.saveCanvas();
    });
  };

  p.draw = () => {
    const centerX = p.width / 2;
    const centerY = p.height / 2;
    const spiralStepX = p.cos(currentAngle) * radius;
    const spiralStepY = p.sin(currentAngle) * radius;

    x += (spiralStepX - x) * easing;
    y += (spiralStepY - y) * easing;

    const noise = p.noise(x, y);
    const rectDistortion = p.map(noise, 0, 1, 0.8, 1.2);
    // const rectDistortion = 1;

    p.translate(centerX, centerY);
    p.rect(x * rectDistortion, y * rectDistortion, 30, 30);

    if (p.dist(x, y, spiralStepX, spiralStepY) < 3) {
      currentAngle += angleIncrement;
      radius *= p.map(noise, 0, 1, 1, 1.2);
      // angleIncrement *= 0.95;
    }
  };
};

export const e_6_2_1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(120, 120);
    p.background(204);
  };

  p.draw = () => {
    p.translate(p.mouseX, p.mouseY);
    p.rect(0, 0, 30, 30);
    p.translate(35, 10);
    p.rect(0, 0, 15, 15);
  };
};

export const e_6_3_1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(120, 120);
    p.background(204);
  };

  p.draw = () => {
    p.rotate(p.mouseX / 100.0);
    p.translate(40, 30);
    p.rect(0, 0, 160, 20)
  };
};

export const e_6_5_1 = (p: p5) => {
  let angle = 0.0;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(204);
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.translate(p.mouseX, p.mouseY);
    p.rotate(angle);
    p.rect(0, 0, 30, 30);
    
    angle += 0.1;
  };
};

export const e_6_5_2 = (p: p5) => {
  let angle = 0.0;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(204);
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.translate(p.mouseX, p.mouseY);
    p.rotate(angle);
    p.rect(0, 0, 30, 30);
    
    angle += 0.01;
  };
};
