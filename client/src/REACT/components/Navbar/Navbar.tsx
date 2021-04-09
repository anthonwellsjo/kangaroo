import React from 'react';
import { Link } from 'react-router-dom';
import Spreaderizer from '../Stucture/Spreaderizer/Spreaderizer';
import CSS from 'csstype';

const LinkStyle: CSS.Properties = {

}
const navbarStyle: CSS.Properties = {
position:"absolute",
right: "300px",
width: "30%",
top: "90px"
}

const Navbar: React.FC = () => {
  return (
    <div style={navbarStyle}>
      <Spreaderizer>
        <Link to="/psycho"><p className="navLink" style={LinkStyle}>psycho</p></Link>
        <Link to="/Baico"><p className="navLink" style={LinkStyle}>Baico</p></Link>
        <Link to="/Laico"><p className="navLink" style={LinkStyle}>Laico</p></Link>
      </Spreaderizer>
    </div>
  )
}

export default Navbar;