import React from 'react';
import './BlogPost.css';

import Spinner from '../../components/UI/Spinner/Spinner';

const blogPost = (props) => {

    let postTitle = props.post ? props.post.title : 'No Blog';
    let postBody = props.post ? props.post.body : 'Was found'
    let loadingAnimation = props.loading ? <Spinner /> : null
    return (
        <div className='post'>
            {loadingAnimation}
            <h1 className='title'>{postTitle}</h1>
            <p>{postBody}</p>
        </div>
    )
}

export default blogPost;