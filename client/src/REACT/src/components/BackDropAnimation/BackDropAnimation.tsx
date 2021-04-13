import React from 'react';
import { animated, useSpring } from 'react-spring';
import useCompositionColor from '../../hooks/useCompositionColor';

interface props {
  show: boolean
}

const BackDropAnimation = ({ show }: props) => {

  const styles = useSpring({
    reverse: show,
    to: { transform: "scale(0) rotate(0deg)" },
    from: { transform: "scale(3300) rotate(45deg)" }
  })

  if (!show) return null;

  return (
    <div style={{ position: "fixed", height: "100vh", width: "100vw", overflow: "hidden", zIndex: 1 }}>
      <animated.div style={{ ...styles, backgroundColor: useCompositionColor("orange"), height: "1px", width: "1px" }} />
    </div>
  )
}

export default BackDropAnimation;