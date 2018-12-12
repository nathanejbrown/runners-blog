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
    }

    render () {

        let messageFromBackend = <Spinner />
        if (!this.props.loading) {
            messageFromBackend = <h1>{this.props.message}</h1>
        }

        return (
            <Fragment>
                <h1>hello</h1>
                {messageFromBackend}
                {this.props.redirectPath}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.profile.message,
        loggedIn: localStorage.getItem('token') !== null,
        redirectPath: state.login.redirectPath,
        loading: state.profile.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token)),
        redirect: (path) => dispatch(actions.redirect(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);