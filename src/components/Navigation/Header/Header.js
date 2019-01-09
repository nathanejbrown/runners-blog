import React, { Fragment } from 'react';
import './Header.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import { NavLink } from 'react-router-dom';

const header = (props) => {

    return (
        <Fragment>
            <div className="header">
                <div className='DrawerToggle' onClick={props.toggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h3 className="headerH3"><NavLink to="/home">Running Blog Thing</NavLink></h3>
                <div className="innerHeader desktopOnly">
                    <NavigationItems loggedIn={props.loggedIn} current={props.current} />
                </div>
            </div>
        </Fragment>
    )
}

export default header;