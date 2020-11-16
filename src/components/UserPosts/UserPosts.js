import React, {Component} from 'react';

class UserPosts extends Component {
  state = {
    userPosts: [],
    isLoading: true
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(userPosts => this.setState({userPosts: userPosts, isLoading: false}))
  }

  render() {
    const {userPosts, isLoading} = this.state;
    return (
      <div>
        {
          !userPosts.length && isLoading && (<div>Loading...</div>)
        }
        {
          !!userPosts.length && !isLoading && userPosts.map(post => (
            <div key={post.id} className="card">
              <div className="card-header"><i>{post.title}</i></div>
              <div className="card-body">
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default UserPosts;
