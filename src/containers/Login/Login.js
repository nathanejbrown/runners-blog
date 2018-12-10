import React, { Component, Fragment } from 'react';
import './Login.css';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import {updateObject} from '../../shared/utility';
import { Redirect } from 'react-router-dom';

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

        let authRedirect = null;
        if (this.props.loggedIn) {
            authRedirect = <Redirect to={'/profile'} />
        }

        return (
            <Fragment>
                {authRedirect}
                <Header loggedIn={this.props.loggedIn}/>
                    <div className='formBox d-flex flex-column align-items-center'>
                        <form>
                            <div className='form-group col-sm-12'>
                                <Input inputName='email' elementType='input' inputPlaceholder='Email Address' label='Email Address' changed={(event) => this.changedInput(event)}></Input>
                            </div>
                            <div className='form-group col-sm-12'>
                                <Input inputName='password' elementType='password' inputPlaceholder='Password' label='Password' changed={(event) => this.changedInput(event)}></Input>
                            </div>
                            <div className='form-group col-sm-12'>
                                <button type='button' className='btn btn-primary' onClick={(event) => this.processLogin(event)}>Log In</button>
                            </div>
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