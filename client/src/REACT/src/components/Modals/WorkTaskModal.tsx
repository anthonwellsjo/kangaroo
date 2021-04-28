import React from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Centralizer from '../Stucture/Centralizer/Centralizer';

interface props {
  SuccessView: React.ReactNode,
  ErrorMessage: string,
  hasError: boolean,
  isPending: boolean,
  Success: boolean
}

const WorkTaskModal = ({ SuccessView, ErrorMessage, hasError, isPending, Success }: props) => {
  return (
    <div style={{
      position: "fixed",
      zIndex: 5,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(255,255,255,0.8)"
    }}>
      <Centralizer>
        <div style={{
          padding: "50px",
          backgroundColor: "white"
        }}>
          {isPending && <LoadingScreen />}
          {Success && SuccessView}
        </div>
      </Centralizer>
    </div>
  )
}

export default WorkTaskModal;