import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  backgroundColor: "white",
  height: "85%",
  borderRadius: "20px",
  maxHeight: "900px",
  width: "1200px",
  position:"relative",
  boxShadow: "1px 1px 55px lightgrey"
}

const Frame: React.FC = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Frame;