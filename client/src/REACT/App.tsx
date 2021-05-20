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
import AuthorizationLayer from './src/components/AuthorizationLayer/AuthorizationLayer';
import { UserContext } from './src/contexts/userContext';
import Krav4 from './src/views/krav4/krav4.jsx';


const domContainer = document.getElementById('root');

const App = () => {
  const [page, setPage] = useContext(PageContext);
  const [user, setUser] = useContext(UserContext);



  return (
    <AuthorizationLayer>
      <GlobalModalLayer>
        <MainLayout>
          <Switch>
            <Route path="/category/:catName" component={CategoryView} />
            <Route exact path="/">
              {page.user && user.loggedInUser ?
                <Redirect to={`/dashboard/${(page.user as firebase.User).uid}`} /> :
                <LandingView />}
            </Route>
            <Route path="/dashboard/">
              {page.user && user.loggedInUser ?
                <DashBoardView /> :
                <Redirect to={`/`} />}
            </Route>
            <Route path="/krav4/">
              <Krav4 />
            </Route>
          </Switch>
        </MainLayout>
      </GlobalModalLayer>
    </AuthorizationLayer>
  )
}

export default App;