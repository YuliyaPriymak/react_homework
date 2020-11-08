import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import User from "../user/User";

class ControlledForm extends Component {
  api = new UserApiService();
  state = {
    name: '',
    user: [],
  };

  inputChangeValue = (e) => {
    this.setState({name: e.target.value});
    let result = this.props.users.filter(user => user.name.includes(e.target.value));
    this.setState({user: result});
  };

  render() {
    return (
      <div>
        <form className="form-inline">
          <label className="sr-only" htmlFor="inlineFormInputName2">User name</label>
          <input type="text" className="form-control mb-2 mr-sm-2"
                 id="inlineFormInputName2" placeholder="Enter user name"
                 value={this.state.name} onChange={this.inputChangeValue}/>
        </form>
        {!!this.state.name && (
          this.state.user.map(user=> (<User user={user}/>))
        )}
      </div>
    );
  }

}

export default ControlledForm;
