import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../Components/Post/Post';
import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        console.log(this.props);
        axios.get('/posts/')
            .then(response => {
                const posts = response.data.slice(0,4);

                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                //this.setState({error: true});
            });
    }

    postClickedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
   
    render(){

        let posts = <p style={{textAlign: 'center'}}>Something Went Wrong</p>

        if(!this.state.error){
            posts = this.state.posts.map( post => {
                return ( 
                    <Link to={'/' + post.id} key={post.id}>
                        <Post 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postClickedHandler(post.id)}/>
                    </Link>
                );
                        });
        }
        
        return(
            <section className="Posts">
                    {posts}
            </section>
        );
    }
}

export default Posts;