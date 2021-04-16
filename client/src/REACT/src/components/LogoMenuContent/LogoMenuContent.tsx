import React from 'react';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import BreakInTransition from '../Transitions/BreakIn';
import ZoomInTransition from '../Transitions/zoomIn';

interface props {
  show: boolean,
  onCloseClicked: () => void
}

const LogoMenuContent = ({ show, onCloseClicked }: props) => {

  if (!show) return null;

  return (
    <>
      <Centralizer>
        <main style={{ position: "absolute", width: "70%", height: "50%", color: "white", marginTop: "-200px", userSelect: "none", zIndex: 2 }}>
          <BreakInTransition trigger={show} height={"250px"}>
            <h1 style={{marginLeft: "10px"}}>Bli bättre förälder med</h1>
            <h2 style={{ fontSize: "10em", marginTop: "-75px" }}>Kangaroo</h2>
          </BreakInTransition>
        </main>
      </Centralizer>
      <div onClick={onCloseClicked} style={{ position: "absolute", left: "20px", top: "20px", zIndex: 2 }}>
        <ZoomInTransition delay={500} trigger={show}>
          <svg style={{ cursor: "pointer", color: "white" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#FFFFFF" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
        </ZoomInTransition>
      </div>
    </>
  )
}

export default LogoMenuContent;