import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './src/components/Layout/MainLayout';
import LandingView from './src/views/LandingViews/LandingView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const domContainer = document.getElementById('root');

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/app.html/app">
          <LandingView />
        </Route>
      </Switch>
    </MainLayout>
  )
}

ReactDOM.render(
  <Router>
    {App()}
  </Router>,
  domContainer);