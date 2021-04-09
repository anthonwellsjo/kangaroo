import React from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
  position: "absolute",
  left: "50px",
  top: "25px",
  userSelect: "none"
}

const fontStyle: CSS.Properties = {
  fontWeight: 900,
  fontSize:"1em"
}

const SiteTitle: React.FC = () => {
  return (
    <div style={style}>
      <h1 style={fontStyle}>Kangaroo</h1>
    </div>
  )
}

export default SiteTitle;