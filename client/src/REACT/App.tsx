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

const domContainer = document.getElementById('root');

// This URL should be in a dotenv file but i keep it here for two reasons: private git repo and less config for classmates
const client = new ApolloClient({ uri: "https://8ci5beth.api.sanity.io/v1/graphql/production/default", cache: new InMemoryCache() });

const App = () => {
  const [page, setPage] = useContext(PageContext);


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
            {/* {page.user ? */}
            <DashBoardView /> :
            {/* <Redirect to={`/`} />} */}
          </Route>
        </Switch>

      </MainLayout>
    </GlobalModalLayer>
  )
}

export default App;