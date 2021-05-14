import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { PageProvider } from './src/contexts/pageContext';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { firebaseConfig } from '../../firebaseconfig';
import App from './App';
import { UserContextProvider } from './src/contexts/userContext';
import { AlertProvider } from './src/contexts/alertContext';
import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary.jsx';
import { apolloSanityClient } from './src/queries/apollo/apolloClients';

const domContainer = document.getElementById('root');

// This URL should be in a dotenv file but i keep it here for two reasons: private git repo and less config for classmates


const Index = () => {




  return (
    <ApolloProvider client={apolloSanityClient}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <PageProvider>
          <UserContextProvider>
            <AlertProvider>
              <Router>
                <ErrorBoundary>
                  <App />
                </ErrorBoundary>
              </Router>
            </AlertProvider>
          </UserContextProvider>
        </PageProvider>
      </FirebaseAuthProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(<Index />, domContainer);