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
