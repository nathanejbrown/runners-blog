import React, { Component } from 'react';
import './App.css';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './containers/HomePage/HomePage';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Logout from './containers/Logout/Logout';
import Layout from './hoc/Layout/Layout';
import MyPosts from './containers/MyPosts/MyPosts';

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
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/myposts" component={MyPosts} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
