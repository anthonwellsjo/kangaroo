import React, { useEffect, useState } from 'react';
import Users from './components/users';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import { getUsers } from './fetchLogic/fetchLogic';

const Krav4 = () => {


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Följande komponenter ämnar att uppfylla krav nummer 4, 7 och 8.</p>
      </div>
      <ViewLayoutWrapper>
        <ViewColumn widthInPercent={25} >
          <Users users={[]} />
        </ViewColumn>
        <ViewColumn widthInPercent={25} >
          <Users users={[]} />
        </ViewColumn>
        <ViewColumn widthInPercent={25} >
          <Users users={[]} />
        </ViewColumn>
        <ViewColumn widthInPercent={25} >
          <Users users={[]} />
        </ViewColumn>
      </ViewLayoutWrapper>
    </>
  )
}

export default Krav4;