import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute as Route } from './PrivateRoute';

import { Login, Register, Home } from '../pages';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route isPrivate={false} path="/" exact component={Login} />
      <Route isPrivate={false} path="/register" exact component={Register} />
      <Route isPrivate path="/home" component={Home} />
    </Switch>
  );
}
