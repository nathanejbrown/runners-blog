import React, { Component } from 'react';
import './App.css';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.loggedIn) {
      routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: localStorage.getItem('token') !== null
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
