import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { homepageRoute } from '../../shared/routes/routes';
import Homepage from './homepage/new';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route path={homepageRoute()} component={Homepage} />
        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
