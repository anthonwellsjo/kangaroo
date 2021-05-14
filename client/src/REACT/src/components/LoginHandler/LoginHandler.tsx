import React, { useContext, useEffect } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import firebase from "firebase/app";
import { useQuery } from '@apollo/client';
import { GET_USER_WITH_EMAIL } from '../../queries/database/databaseQueries';
import { apolloDbClient } from '../../queries/apollo/apolloClients';
import { UserContext } from '../../contexts/userContext';

interface props {
  firebaseUser: firebase.User
}

const LoginHandler = ({ firebaseUser }: props) => {
  const [user, setUser] = useContext(UserContext);
  console.log("anonymous user");

  const { loading, error, data } = useQuery<databaseUser.GetUserWithEmailData>(GET_USER_WITH_EMAIL, { variables: { email: firebaseUser.isAnonymous ? "alice@prisma.io" : firebaseUser.email }, client: apolloDbClient });
  useEffect(() => {
    if (data) {
      setUser(prev => ({ ...prev, loggedInUser: data.getUserWithEmail }));
    }
  }, [data])

  if (loading) return <LoadingScreen />
  if (error) {
    console.log(error.graphQLErrors);
    return (
      <div>
        <h1>{error.name}</h1>
        <h2>{error.message}</h2>
      </div>
    )
  }

  return null;
}

export default LoginHandler;