import React, { useContext, useState } from 'react';
import CSS from 'csstype';
import { animated, useSpring } from 'react-spring';
import useCompositionColor from '../../../hooks/useCompositionColor';

const styles: CSS.Properties = {
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "none",
  position: "absolute",
  width: "40px",
  height: "40px",
  backgroundColor: useCompositionColor("red"),
  // boxShadow: "0px 0px 30px 10px rgba(209, 106, 29, 0.24)",
  // borderRadius: " 32px",
  overflow: "hidden"
}

const aniStyle: CSS.Properties = {
  backgroundColor: useCompositionColor("green"),
  top: "0",
  left: "0",
  position: "absolute",
  width: "40px",
  overflow: "hidden"
}

interface props {
  onClick: () => void
}

const SignOutButton = ({ onClick }: props) => {
  const [hover, setHover] = useState(false);

  const springProps = useSpring({
    to: { height: hover ? "40px" : "0px" },
    from: { height: "0px" },
    config: {
      friction: 20,
      mass: 1
    }
  })


  return (
    <div style={{
      position: "fixed",
      top: "10px",
      right: "20px",
      zIndex: 20,
      width: "40px",
      height: "40px",
      borderRadius: "20px",
      overflow: "hidden"
    }}>
      <button
        onClick={onClick}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={(() => setHover(true))} style={styles}>
        <animated.div style={{ ...aniStyle, ...springProps }} >
          <div style={{
            position: "absolute",
            height: "40px",
            width: "40px",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{ marginTop: "3px", marginRight: "1px" }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
            </div>
          </div>
        </animated.div>
        <div style={{ marginTop: "3px", marginRight: "1px" }}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L7 16 7 13 16 13 16 11 7 11 7 8z"></path><path d="M13.001,2.999c-2.405,0-4.665,0.937-6.364,2.637L8.051,7.05c1.322-1.322,3.08-2.051,4.95-2.051s3.628,0.729,4.95,2.051 s2.051,3.08,2.051,4.95s-0.729,3.628-2.051,4.95s-3.08,2.051-4.95,2.051s-3.628-0.729-4.95-2.051l-1.414,1.414 c1.699,1.7,3.959,2.637,6.364,2.637s4.665-0.937,6.364-2.637c1.7-1.699,2.637-3.959,2.637-6.364s-0.937-4.665-2.637-6.364 C17.666,3.936,15.406,2.999,13.001,2.999z"></path></svg>
        </div>
      </button>
    </div>

  )
}

export default SignOutButton;