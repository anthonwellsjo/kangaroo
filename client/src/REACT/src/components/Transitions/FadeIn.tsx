import React, { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';

interface props {
  children: ReactNode,
  delay?: number,
  trigger: boolean
}

const FadeInTransition = ({ children, delay, trigger }: props) => {

  const styles = useSpring({
    to: { transform: trigger ? "scale(1)" : "scale(0)" },
    from: { transform: "scale(0)" }
  })

  return (
    <animated.div style={styles}>
      {children}
    </animated.div>
  )
}

export default FadeInTransition;