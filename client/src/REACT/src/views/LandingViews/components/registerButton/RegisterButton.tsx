import React, { useState } from 'react';
import CSS from 'csstype';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import { animated, useSpring } from 'react-spring';

const styles: CSS.Properties = {
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "none",
  position: "absolute",
  width: "157px",
  height: "40px",
  backgroundColor: useCompositionColor("orange"),
  // boxShadow: "0px 0px 30px 10px rgba(209, 106, 29, 0.24)",
  // borderRadius: " 32px",
  overflow: "hidden"
}

const aniStyle: CSS.Properties = {
  backgroundColor: useCompositionColor("registerButton"),
  top: "0",
  left: "0",
  position: "absolute",
  width: "160px",
  overflow: "hidden"
}

const RegisterButton: React.FC = () => {
  const [hover, setHover] = useState(false);
  const springProps = useSpring({
    reverse: hover,
    from: { height: "40px" },
    to: { height: "0px" }
  })

  return (
    <div style={{
      position: "absolute",
      width: "157px",
      height: "40px",
      borderRadius: "20px",
      overflow: "hidden"
    }}>
      <button onMouseLeave={() => setHover(false)} onMouseEnter={(() => setHover(true))} style={styles}>
        <animated.div style={{ ...aniStyle, ...springProps }} >
          <div style={{
            position: "absolute",
            height: "40px",
            width: "160px",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <h4 style={{ fontWeight: 800, margin: "auto auto auto auto", whiteSpace: "nowrap", color: "black" }}>
              Bli medlem
        </h4>
          </div>
        </animated.div>
        <h4 style={{ color: "white", fontWeight: 100, margin: "auto auto auto auto" }}>
          Testa nu
      </h4>
      </button>
    </div>

  )
}

export default RegisterButton;