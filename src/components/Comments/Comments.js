import React, {Component} from 'react';

class Comments extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => this.setState({comments}))
  }

  render() {
    const {comments}=this.state;
    return (
      <div>
        {
          !!comments && comments.map(comment=>(
            <div>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Comments;
