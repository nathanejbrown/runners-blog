import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FloatingBox from './components/FloatingBox/FloatingBox';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <FloatingBox />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
