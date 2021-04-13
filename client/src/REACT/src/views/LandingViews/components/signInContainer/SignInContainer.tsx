import React from 'react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from "firebase/app";
import "firebase/auth";
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';

const SignInContainer: React.FC = () => {
  return (
    <div>
      <Columnizer>
        <h1>Logga in</h1>
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            console.log("logged in", isSignedIn, user, providerId);
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
      </Columnizer>
    </div>
  )
}

export default SignInContainer;