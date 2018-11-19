import React, { Fragment, Component } from 'react';
import './BlogPost.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class BlogPost extends Component {

    componentDidMount() {
        this.props.onFetchPosts();
    }

    render() {

        let postTitle = this.props.posts ? this.props.posts[1].title : 'Blah';
        let postBody = this.props.posts ? this.props.posts[1].body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus vitae purus ac lobortis.'
        return (
            <div className='blog'>
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