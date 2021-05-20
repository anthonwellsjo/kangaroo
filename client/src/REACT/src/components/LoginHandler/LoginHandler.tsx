import React, { useContext, useEffect, useState } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import firebase from "firebase/app";
import { useQuery } from '@apollo/client';
import { GET_USER_WITH_EMAIL } from '../../queries/database/databaseQueries';
import { apolloDbClient } from '../../queries/apollo/apolloClients';
import { UserContext } from '../../contexts/userContext';
import { AlertContext } from '../../contexts/alertContext';
import useCompositionColor from '../../hooks/useCompositionColor';
import { PageContext } from '../../contexts/pageContext';

interface props {
  firebaseUser: firebase.User
}

const LoginHandler = ({ firebaseUser }: props) => {
  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useContext(PageContext);
  const [alerts, setAlerts] = useContext(AlertContext);
  const [errorHappened, setErrorHappened] = useState(false);

  console.log("anonymous user");

  const { loading, error, data } = useQuery<databaseUser.GetUserWithEmailData>(GET_USER_WITH_EMAIL, { variables: { email: firebaseUser.isAnonymous ? "alice@prisma.io" : firebaseUser.email }, client: apolloDbClient });
  useEffect(() => {
    if (data) {
      console.log("setting user", data.getUserWithEmail);
      setUser(prev => ({ ...prev, loggedInUser: data.getUserWithEmail }));
      setPage(prev => ({ ...prev, user: firebaseUser }));
      const alertItem: AlertItem = { header: `Hej ${data.getUserWithEmail.name}!`, text: "Välkommen till Kangaroo! Du är inloggad och klar att börja surfa.", color: useCompositionColor("green") }
      setAlerts(prev => [...prev, alertItem]);
    }
  }, [data])

  useEffect(() => {
    if (errorHappened) {
      const alertItem: AlertItem = { color: useCompositionColor("red"), header: "Ooops", text: "Vi kunde inte nå servern av någon anledning... Vänligen försök igen senare..." };
      setAlerts(prev => ([...prev, alertItem]));
    }
  }, [errorHappened])

  if (loading) return <LoadingScreen />
  if (error) {
    console.log("couldn't reach server", error);
    if (!errorHappened) {
      setErrorHappened(true);
    }
  }

  return null;
}

export default LoginHandler;