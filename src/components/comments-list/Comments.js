import React, {Component} from 'react';
import {CommentsApiService} from "../../services/CommentsApiService";
import Comment from "../comment/Comment";

class Comments extends Component {
  api = new CommentsApiService();
  state = {comments: []};
  async componentDidMount() {
    this.setState({comments: await this.api.getComments()})
  }

  render() {
    return (
      <div className='border'>
        <h1 className='text-center'><i>Comments</i></h1>
        {this.state.comments.map(comment=> <Comment comment={comment} key={comment.id}/>)}
      </div>
    );
  }
}

export default Comments;
