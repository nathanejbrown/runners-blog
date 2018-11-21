import React, { Component, Fragment } from 'react';
import FloatingBox from '../../components/FloatingBox/FloatingBox';
import Header from '../../components/Header/Header';
import BlogPost from '../BlogPost/BlogPost'
import './HomePage.css';

class HomePage extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <div className="App">
                <FloatingBox />
                <BlogPost/>
                </div>
            </Fragment>
        )
    }
}

export default HomePage;