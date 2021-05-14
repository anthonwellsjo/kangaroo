import firebase from 'firebase/app';
import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../../contexts/alertContext';
import { UserContext } from '../../contexts/userContext';
import useCompositionColor from '../../hooks/useCompositionColor';
import LoginHandler from '../LoginHandler/LoginHandler';

const AuthorizationLayer: React.FC = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const [alerts, setAlerts] = useContext(AlertContext);

  useEffect(() => {
    const alertItem: AlertItem = { header: "Success!", text: "AuthorizationLayer rendered successfully.", color: useCompositionColor("green") }
    setAlerts([alertItem]);
  }, [])
  

  var databaseUser = firebase.auth().currentUser;

  return (
    <>
      {user.loggedInUser == null && databaseUser && <LoginHandler firebaseUser={databaseUser} />}
      {children}
    </>
  )
}

export default AuthorizationLayer;