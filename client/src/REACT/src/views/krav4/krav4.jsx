import React, { useEffect, useState } from 'react';
import Users from './components/users';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import { getUsers } from './api/api';
import CreateUser from './components/createUser';
import CreateChild from './components/createChild';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import DeleteUser from './components/deleteUser';


export default class Krav4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: null, gotTheStuff: false };
  }

  componentDidMount() {
    getUsers
      .then(data => {
        console.log("fetched users", data);
        this.setState({
          users: data, gotTheStuff: true
        });
      })
      .catch(err => { throw err })
  }

  somethingUpdated = () => {
    console.log("updating api");
    location.reload();
  }

  render() {

    if (!this.state.gotTheStuff) return <LoadingScreen />
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>Följande komponenter ämnar att uppfylla krav nummer 4, 7 och 8.</p>
        </div>
        <ViewLayoutWrapper>
          <ViewColumn widthInPercent={25} >
            <Users users={this.state.users} />
          </ViewColumn>
          <ViewColumn widthInPercent={25} >
            <CreateUser updateApi={this.somethingUpdated} />
          </ViewColumn>
          <ViewColumn widthInPercent={25} >
            {this.state.users != null &&
              <CreateChild updateApi={this.somethingUpdated} users={this.state.users} />
            }
          </ViewColumn>
          <ViewColumn widthInPercent={25} >
            {this.state.users != null &&
              <DeleteUser updateApi={this.somethingUpdated} users={this.state.users} />
            }
          </ViewColumn>
        </ViewLayoutWrapper>
      </>
    )
  }
}
