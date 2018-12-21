import React, { Component, Fragment } from 'react';
import FloatingBox from '../../components/FloatingBox/FloatingBox';
import BlogPost from '../../components/BlogPost/BlogPost';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './HomePage.css';

class HomePage extends Component {

    componentWillMount() {
        this.props.updateCurrentPath(this.props.location.pathname)
    }

    componentDidMount() {
        this.props.onFetchNewestPost();
    }

    render () {
        return (
            <Fragment>
                <div className="App">
                <FloatingBox />
                <div className='blog'>
                    <BlogPost post={this.props.posts} />
                </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading,
        loggedIn: state.login.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewestPost: () => dispatch(actions.fetchNewestPost()),
        updateCurrentPath: (path) => dispatch(actions.updateCurrentPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);