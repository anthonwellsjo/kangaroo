import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PageProvider } from './src/contexts/pageContext';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { firebaseConfig } from '../../firebaseconfig';
import App from './App';
import { UserContextProvider } from './src/contexts/userContext';

const domContainer = document.getElementById('root');

// This URL should be in a dotenv file but i keep it here for two reasons: private git repo and less config for classmates
const client = new ApolloClient({ uri: "https://8ci5beth.api.sanity.io/v1/graphql/production/default", cache: new InMemoryCache() });

const Index = () => {

  


  return (
    <ApolloProvider client={client}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <PageProvider>
          <UserContextProvider>
            <Router>
              <App />
            </Router>
          </UserContextProvider>
        </PageProvider>
      </FirebaseAuthProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(Index(), domContainer);