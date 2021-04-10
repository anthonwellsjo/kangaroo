import React from 'react';

const ViewLayoutWrapper: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", display: "flex" }}>
      {children}
    </div>
  )
}

export default ViewLayoutWrapper;