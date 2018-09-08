import { ETetrimino, getmMask } from './Tetrimino'

export interface IFallingTetrimino {
  /** テトリーノの種類 */
  tetrimino: ETetrimino;
  /** テトリーノのX位置。 */
  locationX: number;
  /** テトリーノのY位置。 */
  locationY: number;
  /** テトリーノの回転 */
  rotation: number;

  getMask(): number[][];
}


export function createFallingTetrimino(): IFallingTetrimino {
  const tetrimino = (Math.floor(Math.random() * Object.keys(ETetrimino).length/2));
  const rotation = (Math.floor(Math.random() * 4));
  return new CFallingTetrimino({ tetrimino, rotation, locationX: 4, locationY: 0 });
}

export class CFallingTetrimino implements IFallingTetrimino {

  tetrimino: ETetrimino;
  locationX: number;
  locationY: number;
  rotation: number;

  constructor(init?: Partial<CFallingTetrimino>) {
    Object.assign(this, init);
  }
  
  getMask(): number[][] {
    return getmMask(this.tetrimino, this.rotation)!;
  }
}