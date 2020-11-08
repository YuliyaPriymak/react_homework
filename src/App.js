import React, {Component} from 'react';
import ControlledForm from "./components/ControlledForm/ControlledForm";
import {UserApiService} from "./services/UserApiService";
import Form from "./components/forms/Form";

class App extends Component {
  api = new UserApiService();
  state = {
    users: [],
    checkedId: false,
    checkedName: false,
  };

  async componentDidMount() {
    this.setState({users: await this.api.getUsers()});
    console.log(this.state.users);
  }

  handleCheckboxChangeId = () => {
    this.setState({
      checkedId: !this.state.checkedId,
      checkedName: this.state.checkedId
    })
  };
  handleCheckboxChangeName = () => {
    this.setState({
      checkedName: !this.state.checkedName,
      checkedId: this.state.checkedName
    })
  };

  render() {
    return (
      <div className='container'>
        <h3 className='text-center mb-2'><i>Homework 3 (forms)</i></h3>
        <div className='d-flex mb-3'>

          <div className="form-check border border-secondary">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                   checked={this.state.checkedId} onChange={this.handleCheckboxChangeId}/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                Search by user id
              </label>
          </div>

          <div className="form-check border border-secondary ml-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                   checked={this.state.checkedName} onChange={this.handleCheckboxChangeName}/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                Search by user name
              </label>
          </div>
          {/*<input type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange}/>*/}
          {/*<label htmlFor="">Search by user id</label>*/}
         {/* <Form users={this.state.users}/>
          <ControlledForm users={this.state.users}/>*/}
        </div>
        {this.state.checkedId && <Form users={this.state.users}/>}
        {this.state.checkedName && <ControlledForm users={this.state.users}/>}
      </div>
    );
  }
}

export default App;
