import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import AppRoutes from './app';
import Authentication from '../modules/Authentication';

import * as paths from './routesPaths';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={`${paths.app.auth}*`} exact component={Authentication} />
      <Route path={`${paths.app.app}*`} exact component={AppRoutes} isPrivate />
      <Redirect to={`${paths.app.app}`} />
    </Switch>
  );
};

export default Routes;
