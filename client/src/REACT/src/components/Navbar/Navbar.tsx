import React from 'react';
import { Link } from 'react-router-dom';
import Spreaderizer from '../Stucture/Spreaderizer/Spreaderizer';
import CSS from 'csstype';

const LinkStyle: CSS.Properties = {
letterSpacing:".3em"
}
const navbarStyle: CSS.Properties = {
position:"absolute",
right: "40px",
width: "30%",
top: "20px"
}

const Navbar: React.FC = () => {
  return (
    <div style={navbarStyle}>
      <Spreaderizer>
        <Link to="/app.html/app"><p className="navLink" style={LinkStyle}>Psycho</p></Link>
        <Link to="/app.html/Baico"><p className="navLink" style={LinkStyle}>Baico</p></Link>
        <Link to="/app.html/Laico"><p className="navLink" style={LinkStyle}>Laico</p></Link>
      </Spreaderizer>
    </div>
  )
}

export default Navbar;