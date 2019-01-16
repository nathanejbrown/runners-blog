import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import BlogPost from '../../components/BlogPost/BlogPost';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
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
            this.props.getAllPostsByAuthor(token)
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
        let allPosts;
        // (
        //     <div className='d-flex flex-column align-items-center'>
        //         <form>
        //             <div className='form-group col-sm-12'>
        //                 <Input inputName='title' elementType='input' inputPlaceholder='Title' label='Title' changed={(event) => this.changedInput(event)}></Input>
        //             </div>
        //             <div className='form-group col-sm-12'>
        //                 <Input inputName='body' elementType='input' inputPlaceholder='Body' label='Body' changed={(event) => this.changedInput(event)}></Input>
        //             </div>
        //             <div className='form-group col-sm-12'>
        //                 <button type='button' className='btn btn-primary' onClick={(event) => this.sendNewPost(event)}>Submit</button>
        //             </div>
        //         </form>
        //     </div>
        // );

        if (!this.props.loading && this.props.posts) {
            let formattedPosts = this.props.posts.map((post) => {
                return <BlogPost post={post} loading={this.props.loading} key={post.id} />
            })
            allPosts = (
                <div className='postsContainer'>
                    {formattedPosts}
                </div>
            )
            fullProfile = (
                <Fragment>
                    <ProfileImage name={this.props.name} profileImageUrl={this.props.profileImageUrl} />
                    <div className='profileContainer'>
                        {this.props.redirectPath}
                        {allPosts}
                        <button onClick={this.showPhotoUpload}>Upload</button>
                        {/* {formOrPost} */}
                    </div>
                </Fragment>
            )
        }

        // if (this.props.newPost) {
        //     formOrPost = <BlogPost post={this.props.newPost} />
        // }

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