import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import BlogPost from '../../components/BlogPost/BlogPost';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import Input from '../../components/Input/Input';
import { updateObject } from '../../shared/utility';
import './Profile.css';

class Profile extends Component {

    state = {
        post: {
            title: '',
            body: ''
        },
        token: null,
        display: 'all',
        headerMessage: 'All My Posts'
    }
    
    componentWillMount() {
        let token = localStorage.getItem('token') || null;
        this.setState({token: token})
        if (!token) {
            this.props.redirect(<Redirect to={'/'} />);
        } else {
            this.props.getProfileInfo(token)
            this.props.getAllPostsByAuthor(token)
        }
        this.props.updateCurrentPath(this.props.location.pathname);
        this.props.getAllPostsByAuthor(this.state.token);
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
        if (this.state.post.title && this.state.post.body) {
            this.props.createNewPost(this.state.post, this.state.token);
            // this.props.getAllPostsByAuthor(this.state.token);
            this.setState({headerMessage: `Blog Post ${this.state.post.title} was added successfully!`})
        } else {
            this.setState({headerMessage: 'Blog Post can\'t be empty'})
        }
    }

    showAllPosts = () => {
        this.setState({
            display: 'all', headerMessage: 'All My Posts'
        });
        this.props.getAllPostsByAuthor(this.state.token);
    }

    showPhotoUpload = () => {
        this.photoUpload.open();
    }
    
    photoUpload = window.cloudinary.createUploadWidget({
            cloudName: 'drwjbjpwv', 
            uploadPreset: 'tlkohed6'}, (err, result) => { 
                if (err) {
                    console.log('err', err)
                } else {
                    if (result.event === 'success') {
                        this.props.saveProfileImage(this.state.token, result.info.secure_url);
                    }
                }
            })
    
    render () {

        let fullProfile = <Spinner />
        let errorMessage = null;
        let contentToDisplay = null;
        let headerMessage = null;
        
        if (this.state.headerMessage) {
            headerMessage = (
                <h1>{this.state.headerMessage}</h1>
            )
        }

        if (!this.props.loading && this.props.posts) {
            let formattedPosts = this.props.posts.map((post) => {
                return <BlogPost post={post} loading={this.props.loading} key={post.id} />
            })
            if (this.state.display === 'all') {
                contentToDisplay = (
                    <div className='postsContainer'>
                    {formattedPosts}
                </div>
                )
            } else {
                contentToDisplay = (
                    <div className='d-flex flex-column align-items-center'>
                        <form>
                            <div className='form-group col-sm-12'>
                                <Input inputName='title' elementType='input' inputPlaceholder='Title' label='Title' changed={(event) => this.changedInput(event)}></Input>
                            </div>
                            <div className='form-group col-sm-12'>
                                <Input inputName='body' elementType='input' inputPlaceholder='Body' label='Body' changed={(event) => this.changedInput(event)}></Input>
                            </div>
                            <div className='form-group col-sm-12'>
                                <button type='button' className='btn btn-primary' onClick={(event) => this.sendNewPost(event)}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            }
            fullProfile = (
                <Fragment>
                    <div className='profileContainer'>
                        <ProfileImage name={this.props.name} profileImageUrl={this.props.profileImageUrl} click={this.showPhotoUpload} />
                        <div className='imageNameAndButtons'>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button className='btn btn-outline-secondary' onClick={this.showAllPosts}>All My Posts</button>
                                <button className='btn btn-outline-secondary' onClick={() => this.setState({display: 'new', headerMessage: 'Create New Post'})}>New Post</button>
                            </div>
                        </div>
                        <div className='primaryProfileContent'>
                            {this.props.redirectPath}
                            {errorMessage}
                            {headerMessage}
                            {contentToDisplay}
                        </div>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                {fullProfile}
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
        newPost: state.posts.newPost,
        posts: state.profile.posts,
        profileImageUrl: state.profile.profileImageUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token)),
        redirect: (path) => dispatch(actions.redirect(path)),
        logout: () => dispatch(actions.logout()),
        updateCurrentPath: (path) => dispatch(actions.updateCurrentPath(path)),
        createNewPost: (post, token) => dispatch(actions.createNewPost(post, token)),
        getAllPostsByAuthor: (token) => dispatch(actions.getAllPostsByAuthor(token)),
        saveProfileImage: (token, url) => dispatch(actions.saveProfileImage(token, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);