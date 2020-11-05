import React, {Component} from 'react';

class Users extends Component {
  constructor(props){
    super(props);
    console.log(props, 'props');
  }


  render() {
    const {name, id, email} = this.props.user;
    return (
      <div className='border'>
        <h1 className='text-center'><i>Users</i></h1>
        {id}.{name} - {email}
      </div>
    );
  }
}

export default Users;
