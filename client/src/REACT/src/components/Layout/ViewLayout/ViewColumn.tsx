import React, { ReactNode } from 'react';

interface props {
  widthInPercent: number,
  children: ReactNode
}

const ViewColumn = ({ children, widthInPercent }: props) => {
  return (
    <div style={{ position: "relative", left: "5%", width: `${widthInPercent}%`, height: "100%" }}>
      {children}
    </div>
  )
}

export default ViewColumn;