import React, { Fragment } from 'react';
import './NavigationItems.css';
    
const NavigationItems = (props) => {

    let allButtons;

    if (props.loggedIn) {
        allButtons = (
            <Fragment>
                <h3 className="loginButton"><a href="/profile">Profile</a></h3>
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