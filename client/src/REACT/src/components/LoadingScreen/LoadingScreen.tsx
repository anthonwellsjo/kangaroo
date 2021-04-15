import React from 'react';
import Centralizer from '../Stucture/Centralizer/Centralizer';

const LoadingScreen: React.FC = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backdropFilter: "blur(5px)", zIndex: 3 }}>
      <Centralizer>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </Centralizer>
    </div>
  )
}

export default LoadingScreen;