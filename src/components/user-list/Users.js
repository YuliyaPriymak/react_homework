import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import User from "../user/User";

class Users extends Component {
  api = new UserApiService();
  state = {users: []};

  async componentDidMount() {
    this.setState({users: await this.api.getUsers()})
  }

  render() {
    return (
      <div className='border'>
        <h1 className='text-center'><i>Users</i></h1>
        {this.state.users.map(user => <User user={user} key={user.id}/>)}
      </div>
    );
  }
}

export default Users;
