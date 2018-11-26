import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {updateObject} from '../../shared/utility';

class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    changedInput = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        const updatedUser = updateObject(this.state.user, {
            [name]: value
          })
        this.setState({user: updatedUser})
    }

    processLogin = (event) => {
        event.preventDefault();
        this.props.onStartLogin(this.state.user);
    }

    render () {
        return (
            <Fragment>
                <Header loggedIn={this.props.loggedIn}/>
                <form>
                    <input name='email' type='text' placeholder='Email Address' onChange={(event) => this.changedInput(event)}></input>
                    <input name='password' type='password' placeholder='Password' onChange={(event) => this.changedInput(event)}></input>
                    <button type='submit' onClick={(event) => this.processLogin(event)}>Log In</button>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.posts.loading,
        loggedIn: state.login.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLogin: (user) => dispatch(actions.startLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);