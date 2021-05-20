import React from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../api/api';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  };




  render() {
    if (this.props.users == null) return null;

    return (
      <>
        <h1>Get users</h1>
        <ul>
          {Object.keys(this.props.users).map(k => {
            if (this.props.users[k].children == null) {
              return (
                <li style={{ fontWeight: 900, fontSize: "1.3em" }} key={k}>{this.props.users[k].name}</li>
              )
            } else {
              const children = Object.keys(this.props.users[k].children).map(c => this.props.users[k].children[c].name);
              console.log("children", children)
              return (
                <>
                  <li style={{ fontWeight: 900, fontSize: "1.3em" }} key={k}>{this.props.users[k].name}</li>
                  {children.map(t => <p style={{ lineHeight: "5px", fontSize: ".8em" }} key={t}>{t}</p>)}
                </>
              )
            }
          }
          )}
        </ul>
      </>
    )
  }
}

Users.propTypes = {
  users: PropTypes.object
}
