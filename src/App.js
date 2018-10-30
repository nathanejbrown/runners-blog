import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FloatingBox from './components/FloatingBox/FloatingBox';
import BlogPost from './components/BlogPost/BlogPost';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <FloatingBox />
          <BlogPost title='Blog Title'/>
        </div>
      </Fragment>
    );
  }
}

export default App;
