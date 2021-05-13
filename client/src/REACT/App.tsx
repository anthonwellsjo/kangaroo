import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './src/components/Layout/MainLayout';
import LandingView from './src/views/LandingView/LandingView';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import CategoryView from './src/views/categoryView/CategoryView';
import { PageContext, PageProvider } from './src/contexts/pageContext';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { firebaseConfig } from '../../firebaseconfig';
import DashBoardView from './src/views/DashBoardView/DashBoardView';
import GlobalModalLayer from './src/components/GlobalModalLayer/GlobalModalLayer';
import LoadingScreen from './src/components/LoadingScreen/LoadingScreen';


const domContainer = document.getElementById('root');

// This URL should be in a dotenv file but i keep it here for two reasons: private git repo and less config for classmates

const App = () => {
  const [page, setPage] = useContext(PageContext);


  //The following code checks if user is still authorized on page reload (firebase auth), then 
  //checks for that user on the database - however this is just mock code and not safe. The way 
  //useFirebaseUsers() and useGetFirebaseUser() works is not safe for a live app. This is logic that 
  //should be handled on the server (for example, I'm requesting all users info and filtering it
  //client side which is a big no no). Consider everything that lives on the firebase realtime
  //databse to be mock only. This is logic and that later will live on a prisma graphql server and
  //in postresQl-database.


  //denna kod skapar buggar V och ska göras om! -> denna ska kontrollera om användaren är auth med firebase
  //och sedan kolla användaren mot databasen av användare

  var user = firebase.auth().currentUser;
  const { isPending, data, hasError, } = useFirebaseUsers();
  if (isPending) return <LoadingScreen />
  if (hasError) console.log("error getting users from firebase");
  if (user) {
    const loggedUser = useGetFirebaseUser(data, "anthon@gmail.com");
    console.log("logged user", loggedUser)
    if (loggedUser !== undefined && !page.user) {
      setPage(prev => ({ ...prev, user: loggedUser }));
    }
  }

  return (

    <GlobalModalLayer>
      <MainLayout>
        <Switch>
          <Route path="/category/:catName" component={CategoryView} />
          <Route exact path="/">
            {page.user ?
              <Redirect to={`/dashboard/${(page.user as firebase.User).uid}`} /> :
              <LandingView />}
          </Route>
          <Route path="/dashboard/">
            {page.user ?
              <DashBoardView /> :
              <Redirect to={`/`} />}
          </Route>
        </Switch>

      </MainLayout>
    </GlobalModalLayer>
  )
}

export default App;