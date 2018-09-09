import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Tetris from './containers/TetrisTableContainer';

import store from './Store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
        <Tetris />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
