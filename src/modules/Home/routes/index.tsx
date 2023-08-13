import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { home } from '../../../routes/routesPaths';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={home.main} exact component={Home} />
    </Switch>
  );
};

export default Routes;
