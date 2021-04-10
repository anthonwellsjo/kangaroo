import React from 'react';
import Frame from '../Frame/Frame';
import CSS from 'csstype';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import Navbar from '../Navbar/Navbar';
import SiteTitle from '../SiteTitle/SiteTitle';
import Rectangle from '../Composition/Rectangle';

const style: CSS.Properties = {
  height: "100vh",
  width: "100vw"
}

const MainLayout: React.FC = ({ children }) => {

  return (
    <div style={style}>
      <Centralizer>
        <Frame>
          {children}
          <Navbar />
          <SiteTitle />
          <div style={{position:"absolute", left: "20px", top: "90px", }}>
            <Rectangle color={"orange"} height="90px" width="10px" />
          </div>
        </Frame>
      </Centralizer>
    </div>
  )
}

export default MainLayout;