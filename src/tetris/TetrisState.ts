import { IFallingTetrimino } from './FallingTetrimino'

/**
 * Tetris の State のインターフェイス
 */
export interface ITetrisState {
  /** ゲーム開始からの経過時間 */
  tick: number;
  /** 現在落下中のテトリーノ */
  falling: IFallingTetrimino;
  /** 落下済みのテトリーノのリスト */
  landed: IFallingTetrimino[],
  /** インターバル時間 */
  interval: number,
  /** スコア */
  score: number,

  gameover: boolean,

  createTable(includeFalling: boolean): number[][];
}

const width = 10;
const height = 20;

export class CTetrisState implements ITetrisState {

  tick: number;
  falling: IFallingTetrimino;
  interval: number;
  landed: IFallingTetrimino[] = [];
  score: number = 0;
  gameover = false;

  constructor(init: Partial<CTetrisState>) {
    Object.assign(this, init);
  }

  createTable(includeFalling: boolean): number[][] {
    //  初期化
    const table = Array(height);
    for(let y=0; y<table.length; y++) {
      table[y] = Array(width).fill(0);
    }

    const list = includeFalling
      ? [ ...this.landed, this.falling ]
      : [ ...this.landed ];

    list.forEach((tetrino) => {
      const { locationX, locationY } = tetrino;
    
      const mask: number[][] = tetrino.getMask();
      for(let y=0; y<mask.length; y++) {
        for(let x=0; x<mask[y].length; x++) {
          const xx = locationX + x;
          const yy = locationY + y;
          if (0 <= xx && xx < width &&
              0 <= yy && yy < height &&
              mask[y][x] !== 0) {
            table[yy][xx] = mask[y][x];
          }
        }
      }
    });

    return table;
  }
}