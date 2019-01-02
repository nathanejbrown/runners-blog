import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import BlogPost from '../../components/BlogPost/BlogPost';
import Input from '../../components/Input/Input';
import { updateObject } from '../../shared/utility';
import './Profile.css';

class Profile extends Component {

    state = {
        post: {
            title: '',
            body: ''
        },
        token: null
    }
    
    componentWillMount() {
        let token = localStorage.getItem('token') || null;
        this.setState({token: token})
        if (!token) {
            this.props.redirect(<Redirect to={'/'} />);
        } else {
            this.props.getProfileInfo(token)
        }
        this.props.updateCurrentPath(this.props.location.pathname)
    }

    changedInput = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        const updatedPost = updateObject(this.state.post, {
            [name]: value
          })
        this.setState({post: updatedPost})
    }
    
    sendNewPost = (event) => {
        event.preventDefault();
        this.props.createNewPost(this.state.post, this.state.token);
    }

    render () {

        let messageFromBackend = <Spinner />
        let formOrPost = (
            <div className='d-flex flex-column align-items-center'>
                <form>
                    <div className='form-group col-sm-12'>
                        <Input inputName='title' elementType='input' inputPlaceholder='Title' label='Title' changed={(event) => this.changedInput(event)}></Input>
                    </div>
                    <div className='form-group col-sm-12'>
                        <Input inputName='body' elementType='input' inputPlaceholder='Body' label='Body' changed={(event) => this.changedInput(event)}></Input>
                    </div>
                    <div className='form-group col-sm-12'>
                        <button type='button' className='btn btn-primary' onClick={(event) => this.sendNewPost(event)}>Log In</button>
                    </div>
                </form>
            </div>
        );

        if (!this.props.loading) {
            messageFromBackend = <h1>{this.props.message}{this.props.name}</h1>
        }

        if (this.props.newPost) {
            formOrPost = <BlogPost post={this.props.newPost} />
        }

        return (
            <Fragment>
                <div className='profileContainer'>
                    {messageFromBackend}
                    {this.props.redirectPath}
                    {formOrPost}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.profile.message,
        loggedIn: state.login.loggedIn,
        redirectPath: state.login.redirectPath,
        loading: state.profile.loading,
        currentPath: state.layout.path,
        name: state.profile.name,
        newPost: state.posts.newPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token)),
        redirect: (path) => dispatch(actions.redirect(path)),
        logout: () => dispatch(actions.logout()),
        updateCurrentPath: (path) => dispatch(actions.updateCurrentPath(path)),
        createNewPost: (post, token) => dispatch(actions.createNewPost(post, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);