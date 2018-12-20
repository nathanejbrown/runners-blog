import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Profile extends Component {
    
    componentWillMount() {
        let token = localStorage.getItem('token') || null;
        if (!token) {
            this.props.redirect(<Redirect to={'/'} />);
        } else {
            this.props.getProfileInfo(token)
        }
        this.props.updateCurrentPath(this.props.location.pathname)
    }

    render () {

        let messageFromBackend = <Spinner />

        if (!this.props.loading) {
            messageFromBackend = <h1>{this.props.message}</h1>
        }

        return (
            <Fragment>
                {messageFromBackend}
                {this.props.redirectPath}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.profile.message,
        loggedIn: state.login.loggedIn,
        redirectPath: state.login.redirectPath,
        loading: state.profile.loading,
        currentPath: state.layout.path
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token)),
        redirect: (path) => dispatch(actions.redirect(path)),
        logout: () => dispatch(actions.logout()),
        updateCurrentPath: (path) => dispatch(actions.updateCurrentPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);