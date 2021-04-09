import React from 'react';
import Frame from '../../Frame/Frame';
import CSS from 'csstype';
import Centralizer from '../Centralizer/Centralizer';
import Navbar from '../../Navbar/Navbar';

const style: CSS.Properties = {
  height: "100vh",
  width: "100vw"
}

const Layout: React.FC = ({ children }) => {
  return (
    <div style={style}>
      <Centralizer>
        <Frame>
          <Navbar/>
          
          {children}
        </Frame>
      </Centralizer>
    </div>
  )
}

export default Layout;