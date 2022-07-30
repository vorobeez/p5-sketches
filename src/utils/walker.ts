import p5 from 'p5';

export type Point = [number, number];

export interface MoveStrategy {
  makeMove(position: Point): Point
}

export interface DrawStrategy {
  draw(position: Point, p: p5): void
}

export class Walker {
  private x: number;
  private y: number;
  private moveStrategy: MoveStrategy;
  private drawStrategy: DrawStrategy;

  constructor(
    x: number, y: number,
    moveStrategy: MoveStrategy,
    drawStrategy: DrawStrategy) {
      this.x = x;
      this.y = y;
      this.moveStrategy = moveStrategy;
      this.drawStrategy = drawStrategy;
  }

  makeMove(): void {
    const [x, y] = this.moveStrategy.makeMove([this.x, this.y]);
    this.x = x;
    this.y = y;
  }

  draw(p: p5): void {
    this.drawStrategy.draw([this.x, this.y], p);
  }
}
