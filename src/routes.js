import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Error from './pages/Error';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/error" component={Error} />
        <Redirect to="/error"/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;