import React, { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';

interface props {
  children: ReactNode,
  delay?: number,
  trigger: boolean,
  length: number
}

const FadeInTransition = ({ children, delay = 0, trigger, length }: props) => {

  const styles = useSpring({
    to: { opacity: trigger ? 1 : 0 },
    from: { opacity: 0 },
    delay: delay,
    config: {
      duration: length
    }
  })

  return (
    <animated.div style={styles}>
      {children}
    </animated.div>
  )
}

export default FadeInTransition;