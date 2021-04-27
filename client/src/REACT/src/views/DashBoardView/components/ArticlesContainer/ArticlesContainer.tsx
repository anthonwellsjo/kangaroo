import React from 'react';

interface props {
  userChildren: [firebaseUser.Child],
}

const ArticlesContainer = ({ userChildren: uc }: props) => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
      }}
    ><h1 style={{
      fontWeight: 300

    }}>Kangaroos</h1></div>
  )
}

export default ArticlesContainer;