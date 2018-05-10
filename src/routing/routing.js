import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Example from '../components/example';

const AppRouting = () => (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Example} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouting;
