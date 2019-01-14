import React, { Component, Fragment } from 'react';
import './Login.css';
import Input from '../../components/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {updateObject} from '../../shared/utility';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        loggingIn: true
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

    processSignup = (event) => {
        event.preventDefault();
        this.props.newUser(this.state.user);
    }

    switchSignInType = () => {
        let current = this.state.loggingIn
        this.setState({loggingIn: !current})
    }

    render () {

        if (this.props.loggedIn) {
            return (<Redirect to='/profile' />)
        }

        let loginOrSignupForm;
        let loginOrSignupButtonText = 'Create New Account';
        if (this.state.loggingIn) {
            loginOrSignupForm = (
                <div className='formBox d-flex flex-column align-items-center'>
                    <form>
                        <div className='form-group col-sm-12'>
                            <Input inputName='email' elementType='input' inputPlaceholder='Email Address' label='Email Address' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <Input inputName='password' elementType='password' inputPlaceholder='Password' label='Password' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <button type='button' className='btn btn-primary btn-block' onClick={(event) => this.processLogin(event)}>Log In</button>
                            <button type='button' className='btn btn-primary btn-block' onClick={() => this.switchSignInType()}>{loginOrSignupButtonText}</button>
                        </div>
                    </form>
                </div>
            )    
        } else {
            loginOrSignupButtonText = 'Sign in to existing account';
            loginOrSignupForm = (
                <div className='formBox d-flex flex-column align-items-center'>
                    <form>
                        <div className='form-group col-sm-12'>
                            <Input inputName='firstName' elementType='input' inputPlaceholder='First Name' label='First Name' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <Input inputName='lastName' elementType='input' inputPlaceholder='Last Name' label='Last Name' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <Input inputName='email' elementType='input' inputPlaceholder='Email Address' label='Email Address' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <Input inputName='password' elementType='password' inputPlaceholder='Password' label='Password' changed={(event) => this.changedInput(event)}></Input>
                        </div>
                        <div className='form-group col-sm-12'>
                            <button type='button' className='btn btn-primary btn-block' onClick={(event) => this.processSignup(event)}>Sign Up</button>
                            <button type='button' className='btn btn-primary btn-block' onClick={() => this.switchSignInType()}>{loginOrSignupButtonText}</button>
                        </div>
                    </form>
                </div>
            )
        }

        return (
            <Fragment>
                {loginOrSignupForm}
            </Fragment>
        )

    }
}

const mapStateToProps = state => {
    return {
        loading: state.posts.loading,
        loggedIn: state.login.loggedIn,
        redirect: state.login.redirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartLogin: (user) => dispatch(actions.startLogin(user)),
        redirect: (path) => dispatch(actions.redirect(path)),
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token)),
        newUser: (user) => dispatch(actions.newUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);