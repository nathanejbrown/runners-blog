import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FloatingBox from './components/FloatingBox/FloatingBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FloatingBox />
      </div>
    );
  }
}

export default App;
