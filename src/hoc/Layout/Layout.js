import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render () {
        return (
            <Fragment>
                <Header loggedIn={this.props.loggedIn} toggle={this.sideDrawerToggleHandler} />
                <SideDrawer loggedIn={this.props.loggedIn} open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler} />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn
    }
}

export default connect(mapStateToProps)(Layout);