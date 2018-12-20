import React, { Fragment } from 'react';
import './Header.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const header = (props) => {

    return (
        <Fragment>
            <div className="header">
                <div className='DrawerToggle' onClick={props.toggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h3 className="headerH3"><a href="/">Running Blog Thing</a></h3>
                <div className="innerHeader desktopOnly">
                    <NavigationItems loggedIn={props.loggedIn} current={props.current} />
                </div>
            </div>
        </Fragment>
    )
}

export default header;