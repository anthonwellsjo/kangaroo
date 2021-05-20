import React from 'react';
import PropTypes from 'prop-types';
import { getUserIdFromName, postChild } from '../api/api';

export default class createChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const dataToSend = { name: this.state.name };
    console.log("creating child", "users", this.props.users, "parent", this.state.parent, "data to send", dataToSend);
    const parentId = getUserIdFromName(this.props.users, this.state.parent)
    console.log("parent id", parentId);

    postChild(parentId, dataToSend)
      .then((res) => {
        console.log("child created", res);
        this.props.updateApi();
      })
      .catch(err => console.log(err))

  }

  render() {
    if (this.props.users == null){ return null;}

    return (
      <>
        <h1> Create child</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Parent:
            <select name="parent" value={this.state.parent} onChange={this.handleInputChange}>
              {Object.keys(this.props.users).map(k => <option key={k} value={`${this.props.users[k].name}`}>{this.props.users[k].name}</option>)}
            </select>
          </label>
          <br></br>
          <label>
            Name:
          <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

createChild.propTypes = {
  users: PropTypes.object,
  updateApi: PropTypes.func
}