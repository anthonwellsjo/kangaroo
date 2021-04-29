import React, { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../contexts/pageContext';
import logo from '../../images/logo-trans.png';
import BackDropAnimation from '../BackDropAnimation/BackDropAnimation';
import LogoMenuContent from '../LogoMenuContent/LogoMenuContent';



const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.05];
const trans = (x, y, s) => `perspective(100px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const LogoMenu: React.FC = () => {
  const [page, setPage] = useContext(PageContext);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 6, tension: 350, friction: 20 } }))

  return (
    <>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        onClick={() => setPage(prev => ({ ...prev, showKangarooBackdrop: !page.showKangarooBackdrop }))}
        className="logo"
        style={{
          transform: props.xys.interpolate(trans), position: "fixed",
          top: "20px",
          left: "20px",
        }}
      >
        {/* <img style={{ width: "80px" }} src={logo} alt="logo" /> */}
      </animated.div>
      <BackDropAnimation show={page.showKangarooBackdrop} />
      <LogoMenuContent onCloseClicked={() => setPage(prev => ({ ...prev, showKangarooBackdrop: false }))} show={page.showKangarooBackdrop} />
    </>
  )
}

export default LogoMenu;




