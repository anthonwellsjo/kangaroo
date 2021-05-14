import React from 'react';
import CSS from 'csstype';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';

interface props {
  parent: databaseUser.Parent
}

const titleStyle: CSS.Properties = {
  marginTop: "5px",
  fontSize: "0.8em",
  fontFamily: "Martel"
}

const User = ({ parent }: props) => {
  return (
    <div style={{
      cursor:"pointer",

    }}>
      <Columnizer>
        <svg className="userBtn" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <p style={titleStyle}
        >{parent.name}</p>
      </Columnizer>
    </div>
  )
}

export default User;