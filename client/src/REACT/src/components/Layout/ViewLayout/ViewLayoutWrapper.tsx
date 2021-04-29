import React from 'react';

const ViewLayoutWrapper: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", display: "flex", overflow:"hidden" }}>
      {children}
    </div>
  )
}

export default ViewLayoutWrapper;