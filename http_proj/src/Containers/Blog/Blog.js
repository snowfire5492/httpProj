import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';

import './Blog.css';
import NewPost from './NewPost/NewPost';
class Blog extends Component {

    

    

    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost} />
                {/*<Posts /> */}
                
            </div>
        );
    }
}

export default Blog;