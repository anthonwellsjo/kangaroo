import React, { useContext, useState } from 'react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

import useCompositionColor from '../../../../hooks/useCompositionColor';
import RegisterContainer from '../registerContainer/RegisterContainer';
import { useSpring } from '@react-spring/core';
import { animated } from 'react-spring';
import ZoomInTransition from '../../../../components/Transitions/zoomIn';
import LoginUserContainer from '../LoginUserContainer/LoginUserContainer';
import { PageContext } from '../../../../contexts/pageContext';
import FadeInTransition from '../../../../components/Transitions/FadeIn';





const LogInContainer: React.FC = () => {
  const [page, setPage] = useContext(PageContext)

  const signInStyles = useSpring({
    to: { transform: !page.loginAlreadyRegisteredUser ? "translate(0px, 0px)" : "translate(-150px, -475px)", },
    from: { transform: "translate(-150px, -475px)" },
    config: {
      mass: 1,
      tension: 250,
      friction: 40
    }
  })

  const openLoginView = () => {
    if (!page.loginAlreadyRegisteredUser) setPage(prev => ({ ...prev, loginAlreadyRegisteredUser: true }))
  }
  const openRegisterView = () => {
    if (page.loginAlreadyRegisteredUser) setPage(prev => ({ ...prev, loginAlreadyRegisteredUser: false }))
  }

  return (
    <div style={{
      position: "relative",
      boxShadow: "1px 1px 50px -10px grey",
      marginTop: "40px",
      height: "500px", width: "300px",
      borderRadius: "20px",
      backgroundColor: useCompositionColor("orange"),
      overflow: "hidden",
      // backgroundImage: "url('https://picsum.photos/id/103/300/500')"
    }}>
      {/* <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          console.log("firebase auth!");
          console.log("logged in", isSignedIn, user, providerId);
          setPage(prev => ({ ...prev, userLoggedIn: isSignedIn }));
        }}
      </FirebaseAuthConsumer> */}

      <RegisterContainer
        onOpen={openRegisterView}
      />

      <animated.div
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
            top: "30px",
            left: "170px",

          }}>
          {!page.loginAlreadyRegisteredUser &&
            <FadeInTransition delay={800} length={300} trigger={!page.loginAlreadyRegisteredUser}>
              <p onClick={openLoginView} className="smallSimpleTextButton">Redan medlem?</p>
            </FadeInTransition>
          }

        </div>


      </animated.div>

      {page.loginAlreadyRegisteredUser &&
        <LoginUserContainer onOpen={openRegisterView} />
      }
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