import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import {
  loginRoute,
  registerRoute,
  verificationRoute,
} from '../../shared/routes/routes';
import Login from './login/login';
import Register from './register/register';
import Verification from './verification/verification';

import './style.scss';

const Onboarding = () => {
  return (
    <>
      <Switch>
        <Route path={loginRoute()} component={Login} />
        <Route path={registerRoute()} component={Register} />
        <Route path={verificationRoute()} component={Verification} />
        <Redirect to={registerRoute()} />
      </Switch>
    </>
  );
};

export default Onboarding;
