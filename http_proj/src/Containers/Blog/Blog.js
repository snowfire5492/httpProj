import React, { Component } from 'react';

import Post from '../../Components/Post/Post';
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {
                const posts = response.data.slice(0,4);

                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({posts: updatedPosts});
            });
    }

    render () {

        const posts = this.state.posts.map( post => {
            return <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}/>
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;