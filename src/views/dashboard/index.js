import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { newRoute, commentsRoute } from '../../shared/routes/routes';
import New from './new/new';
import Comments from './comments/comments';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route path={newRoute()} component={New} />
        <Route path={commentsRoute()} component={Comments} />
        <Redirect to={newRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
