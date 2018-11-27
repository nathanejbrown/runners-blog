import React, { Component, Fragment } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
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
                <div className='formBox'>
                    <form>
                        <Input inputName='email' inputType='text' inputPlaceholder='Email Address' label='Email Address' changed={(event) => this.changedInput(event)}></Input>
                        <Input inputName='password' inputType='password' inputPlaceholder='Password' label='Password' changed={(event) => this.changedInput(event)}></Input>
                        <button type='submit' onClick={(event) => this.processLogin(event)}>Log In</button>
                    </form>
                </div>
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