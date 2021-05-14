import React from 'react';
import useCompositionColor from '../../../hooks/useCompositionColor';

interface props {
  user: databaseUser.Parent
}

const UserGreeting = ({ user }: props) => {
  return (
    <div style={{
      width: "70%",
      textAlign: "right",
      position: "absolute",
      top: "50px"
    }}>
      <h1 style={{
        fontSize: "1.75em",
        color: useCompositionColor("pink"),
        fontWeight: 300,
        whiteSpace: "nowrap",
        overflow: "visible"
      }}>Välkommen tillbaks <span style={{ color: "black" }}>{user.name}</span>!</h1>
    </div>
  )
}

export default UserGreeting;