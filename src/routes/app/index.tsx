import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import Route from '../Route';
import * as paths from '../routesPaths';
import AppLayout from '../../layouts/app';

import Home from '../../modules/Home';

const Routes: React.FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path={`${paths.home.main}*`} exact component={Home} isPrivate />
        <Redirect to={`${paths.home.main}*`} />
      </Switch>
    </AppLayout>
  );
};

export default Routes;
