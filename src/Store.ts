import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './tetris/module';
import sagas from './tetris/sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);

// Saga を起動する
sagaMiddleware.run(sagas);
