import React, { Fragment } from 'react';
import './BlogPost.css';

import Spinner from '../../components/UI/Spinner/Spinner';

const blogPost = (props) => {

    let post = null;

    if (!props.loading && !props.post) {
        post = (
            <Fragment>
                <h1 className='title'>No Blog</h1>
                <p>Was found</p>
            </Fragment>
        )
    } else {
        post = (
            <Fragment>
                <h1 className='title'>{props.post.title}</h1>
                <p>{props.post.body}</p>
            </Fragment>
        )
    }

    let loadingAnimation = props.loading ? <Spinner /> : null
    return (
        <div className='post'>
            {loadingAnimation}
            {post}
        </div>
    )
}

export default blogPost;