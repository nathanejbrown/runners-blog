import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';

class Layout extends Component {
    render () {
        return (
            <Fragment>
                <Header loggedIn={this.props.loggedIn} />
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