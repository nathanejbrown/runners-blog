import React, { Component } from 'react';
import './BlogPost.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';

// NEED TO SWITCH THIS TO A STATELESS COMPONENT. RENDER IT IN HOMEPAGE AND PASS PROPS.

class BlogPost extends Component {

    componentDidMount() {
        this.props.onFetchPosts();
    }

    render() {

        let postTitle = this.props.posts ? this.props.posts.title : '';
        let postBody = this.props.posts ? this.props.posts.body : ''
        let loadingAnimation = this.props.loading ? <Spinner /> : null
        return (
            <div className='blog'>
                {loadingAnimation}
                <h1 className='title'>{postTitle}</h1>
                <p>{postBody}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);