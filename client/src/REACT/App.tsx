import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout/Layout';
import LandingView from './src/views/LandingViews/LandingView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const domContainer = document.getElementById('root');

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/app.html/app">
          <LandingView />
        </Route>
      </Switch>
    </Layout>
  )
}

ReactDOM.render(
  <Router>
    {App()}
  </Router>,
  domContainer);