import React, {Component} from 'react';

class Post extends Component {
  render() {
    const {id, title, body} = this.props.post;
    return (
      <div className="card">
          <div className="card-body">
            <h4 className="card-title">{id}. {title}</h4>
            <p className="card-text">
              {body}
            </p>
          </div>
      </div>

  );
  }
}

export default Post;
