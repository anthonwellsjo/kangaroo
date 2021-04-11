import React from 'react';
import { animated, useSpring } from 'react-spring';

interface props {
  show: boolean
}

const BackDropAnimation = ({ show }: props) => {

  const styles = useSpring({
    reverse: show,
    to: { transform: "scale(0) rotate(0deg)" },
    from: { transform: "scale(2000) rotate(45deg)" }
  })

  return (
    <animated.div style={{ ...styles, backgroundColor: "red", height: "1px", width: "1px" }} />
  )
}

export default BackDropAnimation;