import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncComponent = asyncComponent(() => {
    return import('./NewPost/NewPost');
})


class Blog extends Component {
    state = {
        auth: true
    }
    


    

    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncComponent} /> : null }
                    <Route path="/" component={Posts}/>
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;