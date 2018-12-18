import React, { Fragment } from 'react';
import './Header.css';

const header = (props) => {

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
        <div className="header">
            <h3 className="headerH3"><a href="/">Running Blog Thing</a></h3>
            <div className="innerHeader">
                {allButtons}
            </div>
        </div>
    )
}

export default header;