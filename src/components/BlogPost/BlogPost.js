import React, { Fragment } from 'react';
import './BlogPost.css';

import Spinner from '../../components/UI/Spinner/Spinner';

const blogPost = (props) => {

    let post = null;
    let allClasses = props.classes ? props.classes[props.classes.length] = 'post' : ['post']

    if (!props.loading && !props.post) {
        post = (
            <Fragment>
                <h1 className='title'>No Blog</h1>
                <p>Was found</p>
            </Fragment>
        )
    } else if (props.loading) {
        post = (
            <Spinner />
        )
    } else {
        post = (
            <Fragment>
                <h1 className='title'>{props.post.title}</h1>
                <p>{props.post.body}</p>
            </Fragment>
        )
    }

    return (
        <div className={allClasses.join(' ')}>
            {post}
        </div>
    )
}

export default blogPost;