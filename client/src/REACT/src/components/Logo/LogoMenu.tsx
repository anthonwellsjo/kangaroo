import React from 'react';
import logo from '../../images/logo-trans.png';
import CSS from 'csstype';

const style: CSS.Properties = {
  transform: "scale(.1)",
  transformOrigin: "10px 10px",
  position: "fixed",
  top: "0px",
  left: "70px",
}


const LogoMenu: React.FC = () => {


  return (
    <div style={style}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default LogoMenu;