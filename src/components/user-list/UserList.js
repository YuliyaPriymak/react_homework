import React, {Component} from 'react';
import {users} from "../../data/users";
import User from "../user/User";

class UserList extends Component {
  render() {
    return (
      <div>
        {
          users.map(item => {
            return <User user={item} key={item.id}/>
          })
        }
      </div>
    );
  }
}

export default UserList;
