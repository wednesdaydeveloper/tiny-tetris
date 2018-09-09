import { createAction } from 'redux-actions';

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