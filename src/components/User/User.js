import React, {Component} from 'react';
import {Link, NavLink, Route, Switch} from "react-router-dom";
import UserPosts from "../UserPosts/UserPosts";

class User extends Component {
  state = {
    user: null,
    isLoading: true
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then(response => response.json())
      .then(user => this.setState({
        user: user,
        isLoading: false
      }));
  };

  render() {
    const {url} = this.props.match;
    const {user, isLoading} = this.state;
    return (
      <div>
        {
          !user && isLoading && <div><h1>Loading...</h1></div>
        }
        {
          user && !isLoading && (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{user.id}. {user.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                <p className="card-text">{user.email}</p>
                <Link to={`${url}/posts/${user.id}`} className='btn btn-primary'>{user.username} posts</Link>
              </div>
            </div>

          )
        }
        <Switch>
          <Route path={`${url}/posts/:id`} component={UserPosts}/>
        </Switch>
      </div>
    );
  }
}

export default User;
