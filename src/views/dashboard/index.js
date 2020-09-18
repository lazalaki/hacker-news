import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { newRoute } from '../../shared/routes/routes';
import New from './new/new';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route path={newRoute()} component={New} />
        <Redirect to={newRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
