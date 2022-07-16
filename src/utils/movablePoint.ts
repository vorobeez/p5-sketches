import p5 from 'p5';

export class MovablePoint {
  private x: number;
  private y: number;
  private radius: number;
  private isDragging: boolean;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.isDragging = false; 
  }

  getCoordinates(): [number, number] {
    return [this.x, this.y];
  }

  draw(p: p5) {
    p.ellipseMode(p.CENTER);
    p.ellipse(this.x, this.y, this.radius * 2);
  }
  
  mousePressed(p: p5) {
    const isInPoint = p.mouseX >= (this.x - this.radius) && p.mouseX <= (this.x + this.radius)
      && p.mouseY >= (this.y - this.radius) && p.mouseY <= (this.y + this.radius);

    if (isInPoint) {
      this.isDragging = true;
    }
  }

  mouseDragged(p: p5) {
    if (this.isDragging) {
      this.x = Math.max(Math.min(p.mouseX, p.width), 0);
      this.y = Math.max(Math.min(p.mouseY, p.height), 0);
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}

export function createMovablePoint(x: number, y: number, r: number): MovablePoint {
  return new MovablePoint(x, y, r);
}
