import React from 'react';
import './Header.css';

const header = (props) => {

    let headerLoginButton;

    if (props.loggedIn) {
        headerLoginButton = (<h3 className="loginButton"><a href="/logout">Log Out</a></h3>);
    } else {
        headerLoginButton = (<h3 className="loginButton"><a href="/login">Log In</a></h3>);
    }

    return (
        <div className="header">
            <h3 className="headerH3"><a href="/">Running Blog Thing</a></h3>
            <div className="innerHeader">
                {headerLoginButton}
            </div>
        </div>
    )
}

export default header;