import React, {Component} from 'react';

class Users extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        users: users,
        isLoading: false
      }))
  }
  toDetails = (id)=>{
    this.props.history.push(`/users/${id}`)
  };

  render() {
    const {users, isLoading} = this.state;
    return (
      <div>
        {
          !users.length && isLoading && <div><h1>Loading...</h1></div>
        }

        {
          !!users.length && !isLoading && (
            <div className="card">
              <ul className="list-group list-group-flush">
                {users.map(user => (<li key={user.id} className="list-group-item">
                  {user.id}. {user.name}
                    <button className='btn btn-link' onClick={()=>this.toDetails(user.id)}>Details</button>
                </li>
                ))}
              </ul>
            </div>)


            /*<div>
              <h4>{user.id}. {user.name}</h4>
              <p>{user.email}</p>
              <button onClick={()=>this.toDetails(user.id)}>Details</button>
            </div>*/

        }
      </div>
    );
  }
}

export default Users;
