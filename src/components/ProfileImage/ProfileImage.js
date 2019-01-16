import React from 'react';
import './ProfileImage.css';

const profileImage = (props) => {
    return (
        <div className='imageContainer'>
            <img src={props.profileImageUrl} alt='Profile' />
            <h1>{props.name}</h1>
        </div>
    )
}

export default profileImage;