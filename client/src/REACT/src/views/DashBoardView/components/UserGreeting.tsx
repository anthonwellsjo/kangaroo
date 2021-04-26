import React from 'react';
import useCompositionColor from '../../../hooks/useCompositionColor';

interface props {
  user: firebaseUser.Parent
}

const UserGreeting = ({ user }: props) => {
  return (
    <h1 style={{
      position: "relative",
      left: "200px",
      fontSize: "1.75em",
      color: useCompositionColor("pink"),
      fontWeight: 400,
      whiteSpace:"nowrap",
      overflow: "visible"
    }}>Välkommen tillbaks <span style={{ color: "black" }}>{user.name}</span>!</h1>
  )
}

export default UserGreeting;