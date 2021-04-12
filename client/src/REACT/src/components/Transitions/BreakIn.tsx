import React, { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import CSS from 'csstype';


interface props {
  trigger: boolean,
  children: ReactNode,
  height: string
}

const BreakInTransition = ({ children, trigger, height }: props) => {

  const styles = useSpring({
    reverse: trigger,
    to: { height: "0px" },
    from: { height: height }  
  })

  return (
    <animated.div style={{ ...styles, overflow: "hidden", borderBottom: "4px solid black" }}>
      {children}
    </animated.div>
  )
}

export default BreakInTransition;