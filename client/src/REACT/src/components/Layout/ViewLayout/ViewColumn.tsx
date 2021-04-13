import React, { ReactNode } from 'react';

interface props {
  widthInPercent: number,
  children: ReactNode,
  fadeScroll?: boolean,
  scrollable?: boolean
}

const ViewColumn = ({ children, widthInPercent, fadeScroll, scrollable }: props) => {
  const fade = fadeScroll == true ? true : false;
  const isScrollable = scrollable == true ? true : false;
  return (
    <div className={`no-scrollbar ${fadeScroll ? "fade-out" : ""}`} style={{ position: "relative", left: "5%", width: `${widthInPercent}%`, height: "100%", overflowY: isScrollable ? "scroll" : "hidden", overflowX: "visible" }}>
      {children}
    </div>
  )
}

export default ViewColumn;