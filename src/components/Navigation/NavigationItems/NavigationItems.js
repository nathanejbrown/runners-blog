import React, { Fragment } from 'react';
import './NavigationItems.css';
    
const NavigationItems = (props) => {

    let allButtons;

    let alternatingButton;

    if (props.current === '/') {
        alternatingButton = <h3 className='loginButton'><a href="/profile">Profile</a></h3>
    } else if (props.current === '/profile') {
        alternatingButton = <h3 className="loginButton"><a href="/home">Home</a></h3>
    } else {
        alternatingButton = (
            <Fragment>
                <h3 className="loginButton"><a href="/home">Home</a></h3>
                <h3 className='loginButton'><a href="/profile">Profile</a></h3>
            </Fragment>
        )
    }

    if (props.loggedIn) {
        allButtons = (
            <Fragment>
                {alternatingButton}
                <h3 className="loginButton"><a href="/logout">Log Out</a></h3>
            </Fragment>
        );
    } else {
        allButtons = (<h3 className="loginButton"><a href="/login">Log In</a></h3>);
    }

    return (
        <Fragment>
            {allButtons}
        </Fragment>
    )

}

export default NavigationItems