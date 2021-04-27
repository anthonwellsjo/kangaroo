import React, { useContext, useState } from 'react';
import CSS from 'csstype';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import { animated, useSpring } from 'react-spring';
import { PageContext } from '../../../../contexts/pageContext';
import { useHistory } from 'react-router-dom';

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
  backgroundColor: useCompositionColor("blue"),
  // boxShadow: "0px 0px 30px 10px rgba(209, 106, 29, 0.24)",
  // borderRadius: " 32px",
  overflow: "hidden"
}

const aniStyle: CSS.Properties = {
  backgroundColor: useCompositionColor("orange"),
  top: "0",
  left: "0",
  position: "absolute",
  width: "160px",
  overflow: "hidden"
}

const RegisterButton: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [page, setPage] = useContext(PageContext);
  const springProps = useSpring({
    to: { height: hover ? "40px" : "0px" },
    from: { height: "0px" },
    config:{
      friction: 20,
      mass:1
    }
  })
  const onButtonClickedEventHandler = () => {
    setPage(prev => ({ ...prev, loginAlreadyRegisteredUser: false, showFocusOnRegisterBackdrop: true }));
    document.getElementById("registerEmail").focus();
  }

  return (
    <div style={{
      position: "absolute",
      width: "157px",
      height: "40px",
      borderRadius: "20px",
      overflow: "hidden"
    }}>
      <button
        onClick={onButtonClickedEventHandler}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={(() => setHover(true))} style={styles}>
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
            <h4 style={{ fontWeight: 800, margin: "8px auto auto auto", whiteSpace: "nowrap", color: "white" }}>
              Bli medlem
        </h4>
          </div>
        </animated.div>
        <h4 style={{ color: "black", fontSize: ".9em", fontWeight: 900, margin: "auto auto auto auto" }}>
          Testa nu
      </h4>
      </button>
    </div>

  )
}

export default RegisterButton;