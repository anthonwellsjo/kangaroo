import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from '../../images/logo-trans.png';
import CSS from 'csstype';
import BackDropAnimation from '../BackDropAnimation/BackDropAnimation';



const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.05];
const trans = (x, y, s) => `perspective(100px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const LogoMenu: React.FC = () => {
  const [state, setState] = useState({ showBackdrop: false });
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 20 } }))

  return (
    <>
      <BackDropAnimation show={state.showBackdrop} />
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        onClick={() => setState(prev => ({ ...prev, showBackdrop: !state.showBackdrop }))}
        className="logo"
        style={{
          transform: props.xys.interpolate(trans), position: "fixed",
          top: "20px",
          left: "20px",
        }}
      >
        <img style={{ width: "80px" }} src={logo} alt="logo" />
      </animated.div>
    </>
  )
}

export default LogoMenu;




