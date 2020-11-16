import React, {Component} from 'react';

class Posts extends Component {
  state ={
    posts: []
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({posts}))
  }

  render() {
    const {posts} = this.state;
    return (
      <div>
        {
          !!posts && posts.map(post=>(
            <div>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Posts;
