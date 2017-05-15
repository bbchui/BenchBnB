import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
    [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Welcome! Please {this.props.formType}!
        <br/>
        <label>Username
        <input type="text"
          value={this.state.username}
          onChange={this.update("username")} />
        </label>
        <br />
        <label>Password
        <input type="text"
          value={this.state.password}
          onChange={this.update("password")} />
        <br />
        <input type="submit" value="Submit" />
        </label>

      </form>
    )
  }

}

export default SessionForm;
