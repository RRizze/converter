import React, { Component } from 'react';
import { Converter } from './containers/Converter';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="app">
        <Converter />
      </div>
    );
  }
}

export default App;
