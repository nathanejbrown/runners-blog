import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class MyPosts extends Component {

    componentWillMount() {
        const token = localStorage.getItem('token');
        this.props.getAllPostsByAuthor(token)
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        getAllPostsByAuthor: (token) => dispatch(actions.getAllPostsByAuthor(token)),
    }
}

export default connect(null, mapDispatchToProps)(MyPosts);