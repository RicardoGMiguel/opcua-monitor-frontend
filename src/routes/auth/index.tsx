import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '../Route';
import * as paths from '../routesPaths';

import Authentication from '../../modules/Authentication';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={paths.app.auth} exact component={Authentication} isPrivate={false} />
    </Switch>
  );
};

export default Routes;
