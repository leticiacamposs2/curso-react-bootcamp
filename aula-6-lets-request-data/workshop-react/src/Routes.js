import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const HelloWorld = React.lazy(() => import('pages/HelloWorld'))
const People = React.lazy(() => import('pages/People'))

const Routes = props => (
  <Suspense fallback="Loading...">
    <Switch>
      <Route
        exact
        path='/'
        component={routerProps => <HelloWorld {...routerProps} {...props} />} />

      <Route
        exact
        path='/people'
        component={routerProps => <People {...routerProps} {...props} />} />
    </Switch>
  </Suspense>
)

export default Routes
