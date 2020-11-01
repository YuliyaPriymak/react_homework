import React, {Component} from 'react';
import {PostsApiService} from "../../services/PostsApiService";
import Post from "../post/Post";

class Posts extends Component {
  api = new PostsApiService();
  state = {posts: []};
  async componentDidMount() {
    this.setState({posts: await this.api.getPosts()})
  }

  render() {
    return (
      <div className='border'>
        <h1 className='text-center'><i>Posts</i></h1>
        {this.state.posts.map(post => <Post post={post} key={post.id}/>)}
      </div>
    );
  }
}

export default Posts;
