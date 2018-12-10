import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Profile extends Component {

    componentWillMount() {
        let token = localStorage.getItem('token') || null;
        if (!token) {
            this.props.history.push('/');
        } else {
            this.props.getProfileInfo(token)
        }
    }

    render () {

        return (
            <h1>{this.props.message}</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.profile.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfileInfo: (token) => dispatch(actions.getProfileInfo(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);