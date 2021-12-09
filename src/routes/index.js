import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Search from '../pages/Search';
import User from '../pages/User';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
