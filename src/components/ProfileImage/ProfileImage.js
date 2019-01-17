import React from 'react';
import './ProfileImage.css';

const profileImage = (props) => {
    return (
        <div className='imageContainer' onClick={props.click}>
                <img src={props.profileImageUrl} alt='Profile' className='profilePicture' />   
                <div id='whiteBackground'>
                    <p>Edit Image</p>
                </div>    
            <h1>{props.name}</h1>
        </div>
    )
}

export default profileImage;