import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  flexDirection: "column",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0
}

const Columnizer: React.FC = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>

  )
}

export default Columnizer;