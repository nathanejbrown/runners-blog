import React, { Fragment, Component } from 'react';
import './BlogPost.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class BlogPost extends Component {

    componentWillMount() {
        this.props.onFetchPosts();
    }

    render() {
        return (
            <div className='blog'>
                <h1 className='title'>Blah</h1>
                <p>Esse laborum ipsum proident cupidatat voluptate officia do eiusmod incididunt consequat proident aliqua qui amet. Sunt est proident Lorem nostrud qui reprehenderit irure laboris consectetur exercitation ea fugiat. Occaecat elit sunt proident sint.
    
    Est labore velit elit commodo laborum mollit voluptate ad in pariatur esse exercitation. Mollit incididunt ipsum Lorem reprehenderit pariatur amet id veniam nisi pariatur. Nisi ea est ipsum reprehenderit aliqua tempor ea et consequat elit proident nulla. Dolore cupidatat id tempor ut adipisicing consectetur ea magna ex fugiat. Eiusmod in culpa tempor ex adipisicing ad sunt amet.
    
    Dolore et sit veniam aute laboris laboris et. Mollit ea sunt in eiusmod. Et in non incididunt est eu labore aute nisi commodo velit do ut. Commodo ut cupidatat nulla cillum esse fugiat ad aliquip. Non proident commodo fugiat nisi ipsum amet pariatur sint Lorem et duis id consequat. Id adipisicing voluptate tempor sunt.
    
    Lorem enim est est ad eiusmod est amet ad. Irure id culpa sint amet do consectetur Lorem occaecat consequat officia reprehenderit non pariatur. Ea nulla id sit Lorem.
    
    Ipsum proident id aliquip irure irure ipsum pariatur aliqua veniam labore Lorem incididunt eiusmod officia. Ut ipsum et eu ullamco id do magna aute culpa officia. Aute irure non pariatur adipisicing ad ex velit fugiat exercitation commodo. Sint ullamco duis mollit est dolor consequat est sunt velit officia dolore dolore quis commodo. Voluptate nisi anim fugiat ullamco ea consectetur labore amet quis deserunt aliqua est velit. Labore tempor dolor nisi minim reprehenderit aute deserunt.
    
    Mollit incididunt veniam ea reprehenderit in cillum adipisicing pariatur quis proident aliqua. Elit eu esse velit non culpa nostrud ipsum do velit. Quis qui duis proident amet incididunt est id laboris ullamco incididunt amet nostrud.
    
    Sint consequat sint reprehenderit nisi quis reprehenderit sunt sunt. Qui anim ex mollit velit labore ad ad culpa labore esse duis consectetur non incididunt. Sit aute pariatur id consectetur tempor culpa.
    
    Eiusmod elit cupidatat dolor ut incididunt dolor enim ullamco sit. Occaecat eiusmod qui velit ad ea dolor id ex incididunt ut eu ex do officia. Irure exercitation aute est culpa quis non do occaecat in occaecat dolor id elit. Sunt minim veniam enim minim.
    
    Lorem reprehenderit elit quis dolor velit aliqua reprehenderit esse. Elit et velit esse irure. Aliquip adipisicing labore officia anim nostrud amet consequat adipisicing veniam consectetur pariatur dolor. Dolor deserunt ex reprehenderit do dolor id reprehenderit reprehenderit amet.
    
    Nulla qui aliquip aliquip et quis consectetur nostrud adipisicing ad ad incididunt elit. Voluptate aute ut voluptate excepteur enim deserunt. Id veniam officia amet cupidatat aliqua. Ex consectetur laborum mollit ullamco. Sint tempor elit dolore dolore. Reprehenderit irure Lorem quis irure. Enim dolore culpa Lorem aute incididunt enim duis duis reprehenderit voluptate anim aute nulla officia.</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);