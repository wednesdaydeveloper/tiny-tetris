import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <section className="tetris-container">
        <table className="tetris-table">
          <tbody>
            <tr>
              <td className="l1"/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
            <tr>
              <td/><td/><td/><td/><td/><td/><td/><td/><td/><td/>
            </tr>
          </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
