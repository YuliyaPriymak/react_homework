import React, {Component} from 'react';

class User extends Component {

  render() {
let {user} = this.props;
    return (
      <div>
        {
          user.status && (
            <div>{user.name} - {user.age}</div>
          )
        }
        {
          !user.status && (
            <div><b>{user.name} - {user.age}</b></div>
          )
        }

      </div>
    );
  }
}

export default User;
