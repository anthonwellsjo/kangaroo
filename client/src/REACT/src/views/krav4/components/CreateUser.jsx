import React from 'react';
import PropTypes from 'prop-types';
import { insertId, postUser } from '../api/api';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const dataToSend = { name: this.state.name, email: this.state.email };

    postUser(dataToSend)
      .then((res) => {
        console.log("posting done", res);
        this.props.updateApi();
      })
      .catch(err => console.log(err))

  }

  render() {


    return (
      <>
        <h1>Create user</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
          <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

CreateUser.propTypes = {
  users: PropTypes.array,
  updateApi: PropTypes.func
}