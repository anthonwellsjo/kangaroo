import React from 'react';

const AddChildModal: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        backdropFilter: "blur(2px)",
        width: "100vw",
        height: "100vh",
        zIndex: 5,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <h1>Add xhild modal</h1>
    </div>
  )
}

export default AddChildModal;