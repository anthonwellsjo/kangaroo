import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './src/components/Layout/MainLayout';
import LandingView from './src/views/LandingViews/LandingView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import CategoryView from './src/views/categoryView/CategoryView';

const domContainer = document.getElementById('root');

const client = new ApolloClient({ uri: "https://8ci5beth.api.sanity.io/v1/graphql/production/default", cache: new InMemoryCache() });

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/category/:catName" component={CategoryView}/>
        <Route path="/">
          <LandingView />
        </Route>
      </Switch>
    </MainLayout>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      {App()}
    </Router>
  </ApolloProvider>,
  domContainer);