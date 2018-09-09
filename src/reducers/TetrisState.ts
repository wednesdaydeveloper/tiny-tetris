import { IFallingTetrimino, createFallingTetrimino } from './FallingTetrimino'

/**
 * Tetris の State のインターフェイス
 */
export interface ITetrisState {
  /** ゲーム開始からの経過時間 */
  tick: number;
  /** 現在落下中のテトリーノ */
  falling: IFallingTetrimino;
  /** インターバル時間 */
  interval: number,
  /** スコア */
  score: number,

  gameover: boolean,

  table: number[][],
}

const width = 10;
const height = 20;

export function initTable() {
  const table = Array(height);
  for(let y=0; y<table.length; y++) {
    table[y] = Array(width).fill(0);
  }
  return table;
}

export function copyTable(state: ITetrisState): number[][] {
  const { table, falling } = state;

  const newtable = initTable();
  for(let y=0; y<newtable.length; y++) {
    for(let x=0; x<newtable[y].length; x++) {
      newtable[y][x] = table[y][x];
    }
  }
  addTable(newtable, falling);

  return newtable;
}

export function addTable(table: number[][], falling: IFallingTetrimino): void {
  const { locationX, locationY } = falling;
  const mask: number[][] = falling.getMask();
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
}


export function createState(): ITetrisState {
  return new CTetrisState({
    tick: 0,
    falling: createFallingTetrimino(),
    interval: 1000,
    table: initTable(),
  })
}

export class CTetrisState implements ITetrisState {

  tick: number;
  falling: IFallingTetrimino;
  interval: number;
  score: number = 0;
  gameover = false;
  table: number[][];
  constructor(init: Partial<CTetrisState>) {
    Object.assign(this, init);
  }
}