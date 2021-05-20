import React from 'react';
import PropTypes from 'prop-types';
import { deleteUser, getUserIdFromName, postChild } from '../api/api';

export default class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: this.props.users[Object.keys(this.props.users)[0]].name
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
    const parentId = getUserIdFromName(this.props.users, this.state.parent)
    console.log("parentId to delete", parentId);

    deleteUser(parentId)
      .then((res) => {
        console.log("deleting done", res)
        this.props.updateApi();
      })
      .catch(err => console.log(err))

  }

  render() {
    if (this.props.users == null) return null;

    return (
      <>
        <h1> Delete user</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Parent:
            <select name="parent" value={this.state.parent} onChange={this.handleInputChange}>
              {Object.keys(this.props.users).map(k => <option key={k} value={`${this.props.users[k].name}`}>{this.props.users[k].name}</option>)}
            </select>
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Delete" />
        </form>
      </>
    )
  }
}

DeleteUser.propTypes = {
  users: PropTypes.object,
  updateApi: PropTypes.func
}