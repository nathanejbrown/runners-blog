import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.toggle}/>
      <div className={attachedClasses.join(' ')} onClick={props.toggle}>
        <nav>
          <NavigationItems loggedIn={props.loggedIn} current={props.current} />
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer;
