import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { onboardingRoute, dashboardRoute } from '../shared/routes/routes'
import Onboarding from './onboarding'
import Dashboard from './dashboard'



const View = () => {
    return(
        <>
            <Switch>
                <Route path={onboardingRoute()} component={Onboarding} />
                <Route path={dashboardRoute()} component={Dashboard} />
                <Redirect to={onboardingRoute()} />
            </Switch>
        </>
    )
}


export default View;