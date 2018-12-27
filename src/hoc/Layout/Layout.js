import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './Layout.css'
import { checkLogin } from '../../store/actions/index';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    componentWillMount() {
        this.props.checkLogin()
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
          return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    
    render () {

        let mainContent = (
            <main>
                {this.props.children}
            </main>
        )

        if (this.state.showSideDrawer) {
            mainContent = (
                <main className='noScrollMain'>
                    {this.props.children}
                </main>
            )
        }

        return (
            <Fragment>
                <Header loggedIn={this.props.loggedIn} toggle={this.sideDrawerToggleHandler} current={this.props.currentPath} />
                <SideDrawer loggedIn={this.props.loggedIn} open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler} current={this.props.currentPath} />
                {mainContent}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn,
        currentPath: state.layout.path
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: () => dispatch(checkLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);