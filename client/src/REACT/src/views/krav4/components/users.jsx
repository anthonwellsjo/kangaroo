import React from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../fetchLogic/fetchLogic';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  async componentDidMount() {
    getUsers().then(data=>console.log(data));
  }

  render() {

    return (
      <h1>users</h1>)
  }
}

Users.propTypes = {
  users: PropTypes.array
}