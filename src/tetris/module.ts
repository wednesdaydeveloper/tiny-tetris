import { Action, createAction, handleActions } from 'redux-actions';
import { ITetrisState, CTetrisState } from './TetrisState'
import { CFallingTetrimino, IFallingTetrimino, createFallingTetrimino } from './FallingTetrimino'

// //
// // action
// //
export const TIMER_TICK: string                     = 'tetris/tick';
export const INPUT_MOVE_LEFT: string                = 'tetris/left';
export const INPUT_MOVE_RIGHT: string               = 'tetris/right';
export const INPUT_ROTATE_CLOCKWISE: string         = 'tetris/clockwise';
export const INPUT_ROTATE_COUNTER_CLOCKWISE: string = 'tetris/counter_clockwise';
export const INPUT_DECIDE: string                   = 'tetris/decide';
export const GAMEOVER: string                       = 'tetris/gameover';

// //
// //  action creator
// //
export const timeTick               = createAction<number, number>(TIMER_TICK, (num: number) => num);
export const moveLeft               = createAction(INPUT_MOVE_LEFT);
export const moveRight              = createAction(INPUT_MOVE_RIGHT);
export const rotateClockwise        = createAction(INPUT_ROTATE_CLOCKWISE);
export const rotateCounterClockwise = createAction(INPUT_ROTATE_COUNTER_CLOCKWISE);
export const decide                 = createAction(INPUT_DECIDE);

/**
 * state の初期値
 */
const initState: ITetrisState = createState();

export const width = 10;
export const height = 20;

function createState(): ITetrisState {
  return new CTetrisState({
    tick: 0,
    falling: createFallingTetrimino(),
    interval: 1000,
  })
}

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
  const falling = state.falling;
  const mask = falling.getMask();
  const { locationY } = falling;
  const table = state.createTable(false);

  for(let h = 0; h < height - locationY; h++) {
    if (!canMove(falling, table, 0, h)) {
      return locationY + h - 1;
    }
  }

  return height - mask.length
}

function isLanding(state: ITetrisState): boolean {
  const falling = state.falling;
  const table = state.createTable(false);

  return !canMove(falling, table, 0, 1);
}

function tickHandler(state: ITetrisState, action: Action<number>) {
  const tick = state.tick + action.payload!;
  const locationY = state.falling.locationY + 1;
  const table = state.createTable(false);

  let falling;
  let gameover = false;
  if (isLanding(state)) {
    falling = createFallingTetrimino();


    if (!canMove(falling, table, 0, 0)) {
      gameover = true;;
      return new CTetrisState({ ...state, gameover });;
    }

    state.landed = [...state.landed, state.falling];
  } else {
    falling = new CFallingTetrimino({...state.falling, locationY});
  }
  return new CTetrisState({ ...state, tick, falling, gameover });
}

function leftHandler(state: ITetrisState, action: Action<number>) {
  const falling = state.falling;
  const table = state.createTable(false);

  const locationX = canMove(falling, table, -1, 0)
    ? falling.locationX - 1
    : falling.locationX;
  return new CTetrisState({ ...state, falling: new CFallingTetrimino({...falling, locationX }) });
}

function rightHandler(state: ITetrisState, action: Action<number>) {
  const falling = state.falling;
  const table = state.createTable(false);
  const locationX = canMove(falling, table, +1, 0)
    ? falling.locationX + 1
    : falling.locationX;
  return new CTetrisState({ ...state, falling: new CFallingTetrimino({...falling, locationX }) });
}

function decideHandler(state: ITetrisState, action: Action<number>) {
  const locationY = landingPoint(state);
  const land = new CFallingTetrimino({...state.falling, locationY });
  const landed = [...state.landed, land];
  const falling = createFallingTetrimino();
  return new CTetrisState({ ...state, falling, landed });
}

function rotationClockwiseHandler(state: ITetrisState, action: Action<number>) {
  const rotation = (state.falling.rotation + 1 ) % 4
  const table = state.createTable(false);
  const falling = new CFallingTetrimino({...state.falling, rotation });

  return canMove(falling, table, 0, 0)
    ? new CTetrisState({ ...state, falling })
    : state;
}

function rotationCounterClockwiseHandler(state: ITetrisState, action: Action<number>) {
  const rotation = (state.falling.rotation + 3 ) % 4
  const table = state.createTable(false);
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
