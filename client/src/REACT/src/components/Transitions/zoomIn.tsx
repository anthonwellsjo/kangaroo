import React, { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';

interface props {
  trigger: boolean,
  children: ReactNode,
  delay?: number
}

const ZoomInTransition = ({ children, trigger, delay }: props) => {

  const styles = useSpring({
    // reverse: trigger,
    to: { transform: trigger ? "scale(1)" : "scale(0)" },
    from: { transform: "scale(0)" },
    delay: delay > 0 ? delay : 0,
    config: {
      mass: 1,
      tension: 400,
      friction: 40
    }
  })

  return (
    <animated.div style={styles}>
      {children}
    </animated.div>
  )
}

export default ZoomInTransition;