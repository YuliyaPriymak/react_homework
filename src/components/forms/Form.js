import React, {Component} from 'react';
import {UserApiService} from "../../services/UserApiService";
import Users from "../user-list/Users";

class Form extends Component {
  api = new UserApiService();
  state = {
    user: {},
  };

  onInputAction = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${this._name.value}`)
      .then(response => response.json())
      .then(json => {
        this.setState({user: json})
        console.log(this.state.user);
      });
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => this._name = input}/>
        <button onClick={this.onInputAction}>send</button>
        {
          Object.keys(this.state.user).length !==0 && (<Users user={this.state.user}/>)
        }

      </div>
    );
  }
}

export default Form;
