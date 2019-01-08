import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItems.css';
    
const NavigationItems = (props) => {

    let allButtons;

    let alternatingButton;

    if (props.current === '/') {
        alternatingButton = <h3 className='loginButton'><NavLink to="/profile">Profile</NavLink></h3>
    } else if (props.current === '/profile') {
        alternatingButton = <h3 className="loginButton"><NavLink to="/home">Home</NavLink></h3>
    } else {
        alternatingButton = (
            <Fragment>
                <h3 className="loginButton"><NavLink to="/home">Home</NavLink></h3>
                <h3 className='loginButton'><NavLink to="/profile">Profile</NavLink></h3>
            </Fragment>
        )
    }

    if (props.loggedIn) {
        allButtons = (
            <Fragment>
                {alternatingButton}
                <h3 className="loginButton"><NavLink to="/logout">Log Out</NavLink></h3>
            </Fragment>
        );
    } else {
        allButtons = (<h3 className="loginButton"><NavLink to="/login">Log In</NavLink></h3>);
    }

    return (
        <Fragment>
            {allButtons}
        </Fragment>
    )

}

export default NavigationItems