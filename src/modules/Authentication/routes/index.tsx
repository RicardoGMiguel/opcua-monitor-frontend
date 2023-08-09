import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { authentication } from '../../../routes/routesPaths';

import Login from '../pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={authentication.login} exact component={Login} />
    </Switch>
  );
};

export default Routes;
