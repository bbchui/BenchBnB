import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  links() {
    return (
      <div>
        <Link to="/login">Login</Link>
        &nbsp;
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  greeting(currentUser, logout) {
    return (
      <div>
        <h3>Hello {this.props.currentUser.username}</h3>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  render() {
    return (
      this.props.currentUser ? this.greeting(this.props.currentUser, this.props.logout) : this.links()
    )
  }

}


export default Greeting;
