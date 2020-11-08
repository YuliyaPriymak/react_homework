import React, {Component} from 'react';

class User extends Component {
  render() {
    const {name, id, email, username} = this.props.user;
    return (
      <div className="card">
        <div className="card-body bg-dark">
          <h4 className="card-title text-white">{id}. {name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
          <p className="card-text text-white">
            {email}
          </p>
        </div>
      </div>
    );
  }
}

export default User;
