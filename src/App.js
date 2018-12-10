import React, { Component } from 'react';
import './App.css';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';

// const asyncLogin = asyncComponent(() => {
//   return import('./containers/Login/Login');
// });

// const asyncHome = asyncComponent(() => {
//   return import ('./containers/HomePage/HomePage');
// })

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
