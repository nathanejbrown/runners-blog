import React from 'react';
import './Header.css';

const header = () => (
    <div className="header">
        <h3 className="headerH3"><a href="/">Running Blog Thing</a></h3>
        <div className="innerHeader">
            <h3 className="loginButton"><a href="/login">Log In</a></h3>
        </div>
    </div>
)

export default header;