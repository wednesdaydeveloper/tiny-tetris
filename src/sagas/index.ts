import { delay } from "redux-saga";
import { call, fork, put, select } from 'redux-saga/effects';
import { timeTick } from '../actions';
import { ITetrisState } from '../reducers/TetrisState'

function* timerLoop() {
  while(true) {
    const state: ITetrisState = yield select();
    if (state.gameover) {
      break;
    }
    
    yield call(delay, state.interval);
    yield put(timeTick(state.interval));
  }
}

/**
 * saga
 */
const saga = function* () {
  yield fork(timerLoop);
};

export default saga;