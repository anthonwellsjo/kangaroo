import React, { ReactNode } from 'react';

interface props {
  widthInPercent: number,
  children: ReactNode,
  fadeScroll?: boolean
}

const ViewColumn = ({ children, widthInPercent, fadeScroll }: props) => {
  const fade = fadeScroll == true ? true : false;
  return (
    <div className={`no-scroll ${fadeScroll ? "fade-out" : ""}`} style={{ position: "relative", left: "5%", width: `${widthInPercent}%`, height: "100%", overflowY: "scroll", overflowX: "visible" }}>
      {children}
    </div>
  )
}

export default ViewColumn;