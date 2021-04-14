import React, { useState } from 'react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import RegisterContainer from '../registerContainer/RegisterContainer';
import { useSpring } from '@react-spring/core';
import { animated } from 'react-spring';
import ZoomInTransition from '../../../../components/Transitions/zoomIn';



const LogInContainer: React.FC = () => {
  const [state, setState] = useState({ registerView: true });
  const signInStyles = useSpring({
    to: { transform: state.registerView ? "scale(1.9)" : "scale(1)" },
    from: { transform: "scale(1.9)" },
    config: {
      mass: 1,
      tension: 250,
      friction: 30
    }
  })

  const mouseEnterLoginEventHandler = () => {
    if (!state.registerView) setState(prev => ({ ...prev, registerView: true }))
  }
  const mouseEnterRegisterEventHandler = () => {
    if (state.registerView) setState(prev => ({ ...prev, registerView: false }))
  }

  return (
    <div style={{
      position:"relative",
      boxShadow: "1px 1px 50px -10px grey",
      marginTop: "40px",
      height: "500px", width: "300px",
      borderRadius: "20px",
      backgroundColor: useCompositionColor("orange"),
      overflow: "hidden",
      // backgroundImage: "url('https://picsum.photos/id/103/300/500')"
    }}>
      <RegisterContainer
        onHover={mouseEnterRegisterEventHandler}
      />

      <animated.div
        onMouseEnter={mouseEnterLoginEventHandler}
        style={{
          ...signInStyles,
          position: "relative",
          marginLeft: "auto",
          marginRight: "auto",
          top: "65%",
          zIndex: 1,
          borderRadius: "1000px",
          width: "600px",
          height: "1000px",
          backgroundColor: "white"
        }}>
        <div
          style={{
            position: "absolute",
            top: "35px",
            left: "165px",
            fontWeight: 800,
            fontSize: ".9em",
            userSelect: "none"
          }}>
          <ZoomInTransition trigger={!state.registerView}>
            <p>Redan medlem?</p>
          </ZoomInTransition>
        </div>
        

      </animated.div>
    </div>
  )
}

export default LogInContainer;



{/* <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
        </button> */}
{/*         
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          console.log("logged in", isSignedIn, user, providerId);
          return (
            <pre style={{ height: 300, overflow: "auto" }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          );
        }}
      </FirebaseAuthConsumer> */}