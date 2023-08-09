import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Authentication from '../modules/Authentication';
import { authentication } from './routesPaths';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/app/login" exact component={Authentication} />
      <Redirect path="*" to={authentication.login} />
    </Switch>
  );
};

export default Routes;
