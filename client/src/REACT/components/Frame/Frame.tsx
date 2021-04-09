import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  backgroundColor: "white",
  height: "85%",
  width: "1200px"
}

const Frame: React.FC = ({ children }) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Frame;