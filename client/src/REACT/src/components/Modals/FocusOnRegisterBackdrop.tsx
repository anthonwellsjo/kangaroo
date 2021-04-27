import React, { useContext } from 'react';
import { PageContext } from '../../contexts/pageContext';

const FocusOnRegisterBackdrop = () => {
  const [page, setPage] = useContext(PageContext);
  return (
    <div
      onClick={() => setPage(prev => ({ ...prev, showFocusOnRegisterBackdrop: false }))}
      style={{
        position: "fixed",
        zIndex:2,
        top: 0,
        left: 0,
        backgroundColor: "rgba(255,255,255,0.9)",
        width: "100vw",
        height: "100vh"
      }}
    ></div>
  )
}

export default FocusOnRegisterBackdrop;