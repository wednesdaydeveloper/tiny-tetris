import { Action, handleActions } from 'redux-actions';
import { TIMER_TICK, INPUT_MOVE_LEFT, INPUT_MOVE_RIGHT, INPUT_ROTATE_CLOCKWISE, INPUT_ROTATE_COUNTER_CLOCKWISE, INPUT_DECIDE } from '../actions'
import { ITetrisState, CTetrisState, createState, addTable } from './TetrisState'
import { CFallingTetrimino, IFallingTetrimino, createFallingTetrimino } from './FallingTetrimino'


/**
 * state の初期値
 */
const initState: ITetrisState = createState();

export const width = 10;
export const height = 20;


function canMove(falling: IFallingTetrimino, table: number[][], dx: number, dy: number): boolean {
  const mask = falling.getMask();
  const { locationX, locationY } = falling;

  for(let y=0; y<mask.length; y++) {
    for(let x=0; x<mask[y].length; x++) {
      const xx = locationX + x + dx;
      const yy = locationY + y + dy;
      if (mask[y][x] !== 0 && (0 > xx || xx >= width  || 0 > yy || yy >= height || table[yy][xx] !==0)) {
        return false;
      }
    }
  }
  return true;
}

function landingPoint(state: ITetrisState): number {
  const { falling, table } = state;
  const mask = falling.getMask();
  const { locationY } = falling;

  for(let h = 0; h < height - locationY; h++) {
    if (!canMove(falling, table, 0, h)) {
      return locationY + h - 1;
    }
  }

  return height - mask.length
}

/**
 * 一行埋まったらその行を消す。
 * @param table 
 */
function clearRows(table: number[][]): number[][] {

  //  横一列が０以外で埋まっていたら、その行のindexをrowsに追加
  const rows = [];
  for (let i=0; i<table.length; i++) {
    if (table[i].every(c => c !==0)) {
      rows.push(i);
    }
  }

  if (rows.length > 0) {
    const newtable = []
    for (let i=0; i<rows.length; i++) {
      newtable.push(Array(width).fill(0));
    }
    for (let i=0; i<height; i++) {
      if (rows.indexOf(i) < 0) {
        newtable.push(table[i])
      }
    }
    return newtable;
  } else {
    return table;
  }  
}

function tickHandler(state: ITetrisState, action: Action<number>) {
  const tick = state.tick + action.payload!;
  const locationY = state.falling.locationY + 1;
  const { table } = state;

  let falling;
  let gameover = false;
  if (!canMove(state.falling, table, 0, 1)) {
    falling = createFallingTetrimino();

    if (!canMove(falling, table, 0, 0)) {
      gameover = true;;
      return new CTetrisState({ ...state, gameover });;
    }

    addTable(table, state.falling);
    state.table = clearRows(table);
  } else {
    falling = new CFallingTetrimino({...state.falling, locationY});
  }
  return new CTetrisState({ ...state, tick, falling, gameover });
}

function leftHandler(state: ITetrisState, action: Action<number>) {
  const { falling, table } = state;

  const locationX = canMove(falling, table, -1, 0)
    ? falling.locationX - 1
    : falling.locationX;
  return new CTetrisState({ ...state, falling: new CFallingTetrimino({...falling, locationX }) });
}

function rightHandler(state: ITetrisState, action: Action<number>) {
  const { falling, table } = state;
  const locationX = canMove(falling, table, +1, 0)
    ? falling.locationX + 1
    : falling.locationX;
  return new CTetrisState({ ...state, falling: new CFallingTetrimino({...falling, locationX }) });
}

function decideHandler(state: ITetrisState, action: Action<number>) {
  const locationY = landingPoint(state);
  const land = new CFallingTetrimino({...state.falling, locationY });

  addTable(state.table, land);
  state.table = clearRows(state.table);

  const falling = createFallingTetrimino();
  return new CTetrisState({ ...state, falling });
}

function rotationClockwiseHandler(state: ITetrisState, action: Action<number>) {
  const rotation = (state.falling.rotation + 1 ) % 4
  const table = state.table;
  const falling = new CFallingTetrimino({...state.falling, rotation });

  return canMove(falling, table, 0, 0)
    ? new CTetrisState({ ...state, falling })
    : state;
}

function rotationCounterClockwiseHandler(state: ITetrisState, action: Action<number>) {
  const rotation = (state.falling.rotation + 3 ) % 4
  const table = state.table;
  const falling = new CFallingTetrimino({...state.falling, rotation });

  return canMove(falling, table, 0, 0)
    ? new CTetrisState({ ...state, falling })
    : state;
}

/**
 * reducer
 */
export default handleActions<ITetrisState, number>({
  [TIMER_TICK]: tickHandler,
  [INPUT_MOVE_LEFT]: leftHandler,
  [INPUT_MOVE_RIGHT]: rightHandler,
  [INPUT_DECIDE]: decideHandler,
  [INPUT_ROTATE_CLOCKWISE]: rotationClockwiseHandler,
  [INPUT_ROTATE_COUNTER_CLOCKWISE]: rotationCounterClockwiseHandler,
}, initState);
