import firebase from 'firebase/app';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import LoginHandler from '../LoginHandler/LoginHandler';

const AuthorizationLayer: React.FC = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useContext(UserContext);

  var databaseUser = firebase.auth().currentUser;

  return (
    <>
      {user.loggedInUser == null && databaseUser && <LoginHandler firebaseUser={databaseUser} />}
      {children}
    </>
  )
}

export default AuthorizationLayer;