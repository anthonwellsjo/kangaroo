import React from 'react';

interface props {
  user: firebaseUser.Parent
}

const Notifications = ({ user }: props) => {
  return (
    <div style={{
      position: "relative",
    }}>
      <h1
        style={{

          fontFamily: "Nanito Sans",
        }}
      >Notiser</h1>
    </div>
  )
}

export default Notifications;