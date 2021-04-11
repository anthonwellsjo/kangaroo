import React from 'react';
import { animated, useSpring } from 'react-spring';

interface props {
  show: boolean,
  onCloseClicked: () => void
}

const LogoMenuContent = ({ show, onCloseClicked }: props) => {

  const cross = useSpring({
    reverse: show,
    from: { transform: "scale(1)" },
    to: { transform: "scale(0)" },
    delay: 200
  })

  if (!show) return null;

  return (
    <div>
      <animated.svg onClick={onCloseClicked} style={{ ...cross, cursor: "pointer", position: "absolute", right: "200px", top: "50px" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></animated.svg>
    </div>
  )
}

export default LogoMenuContent;