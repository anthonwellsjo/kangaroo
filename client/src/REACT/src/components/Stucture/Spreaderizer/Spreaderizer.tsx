import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
}

const Spreaderizer: React.FC = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>

  )
}

export default Spreaderizer;