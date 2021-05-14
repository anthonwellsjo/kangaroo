import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  backgroundColor: "white",
  height: "85%",
  maxHeight: "900px",
  width: "1200px",
  position:"relative"
}

const Frame: React.FC = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Frame;