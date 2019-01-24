import React from 'react';
import './ProfileImage.css';

const profileImage = (props) => {
    return (
        <div className='imageContainer' onClick={props.click}>
                <div>
                    <img src={props.profileImageUrl} alt='Profile' className='profilePicture' />       
                    <p id='whiteBackground'>Edit Image</p>
                </div>    
            <h1>{props.name}</h1>
        </div>
    )
}

export default profileImage;