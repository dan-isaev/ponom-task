import * as React from 'react';

import './App.css';
import { Card } from './modules/Card';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Card
          thumbnailSrc="https://i.ytimg.com/vi/SU1rTUpaoGU/maxresdefault.jpg"
          title="Metronomy"
          date="20 января"
          place="Дом музыки"
          minPrice={1500}
        />
      </div>
    );
  }
}

export default App;
