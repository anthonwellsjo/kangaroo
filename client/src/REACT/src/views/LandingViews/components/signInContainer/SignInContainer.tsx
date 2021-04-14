import React, { useState } from 'react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import RegisterContainer from '../registerContainer/RegisterContainer';
import { useSpring } from '@react-spring/core';
import { animated } from 'react-spring';



const SignInContainer: React.FC = () => {
  const [state, setState] = useState({ registerView: false });
  const signInStyles = useSpring({
    reverse: !state.registerView,
    to: { transform: "scale(1.9)" },
    from: { transform: "scale(1)" }
  })

  const mouseEnterEventHandler = () => {
    if (!state.registerView) setState(prev => ({ ...prev, registerView: true }))
  }

  return (
    <div style={{
      boxShadow: "1px 1px 50px -10px grey",
      marginTop: "40px",
      height: "500px", width: "300px",
      borderRadius: "20px",
      backgroundColor: useCompositionColor("orange"),
      overflow: "hidden",
      backgroundImage: "url('https://picsum.photos/id/103/300/500')"
    }}>
      <div style={{
        position: "absolute",
        height: "500px",
        width: "300px",
        borderRadius: "20px",
        background: "white",
        opacity: ".2"
      }} />

      <RegisterContainer />

      <animated.div
        onMouseEnter={mouseEnterEventHandler}
        style={{
          ...signInStyles,
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          top: "65%",
          zIndex: 1,
          borderRadius: "1000px",
          width: "600px",
          height: "1000px",
          backgroundColor: "white"
        }}>
      </animated.div>
    </div>
  )
}

export default SignInContainer;



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