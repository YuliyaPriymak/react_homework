import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Route, Switch} from 'react-router';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import User from "./components/User/User";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className="nav nav-pills nav-justified mb-3 mt-3">
          <li className="nav-item">
            <NavLink exact to='/' className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/users' className="nav-link">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/posts' className="nav-link">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/comments' className="nav-link">Comments</NavLink>
          </li>
        </ul>

        <div>
          <Switch>
            <Route exact path='/' render={()=> <h1>Home page</h1>} />
            <Route exact path='/users' component={Users}/>
            <Route  path='/users/:id' component={User}/>
            <Route path='/posts' component={Posts}/>
            <Route path='/comments' component={Comments}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
