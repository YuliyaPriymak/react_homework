import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import Users from "../user-list/Users";
import User from "../user/User";

class Form extends Component {
  api = new UserApiService();
  state = {
    user: [],
  };

  onInputAction = () => {
    const {users} = this.props;
    let result = users.filter(user => user.id === Number(this._id.value));
    this.setState({user: result});
  };

  render() {
    return (
      <div>
        <form className="form-inline">
          <label className="sr-only" htmlFor="inlineFormInputName2">User id:</label>
          <input type="text" className="form-control mb-2 mr-sm-2"
                 id="inlineFormInputName2" placeholder="Enter user id"
                 ref={input => this._id = input} onChange={this.onInputAction}/>
        </form>
        {!!this._id && (
          this.state.user.map(user => (<User user={user}/>))
        )}

      </div>
    );
  }
}

export default Form;
