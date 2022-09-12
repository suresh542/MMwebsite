import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { auth, notAuth, checkRole } from './utils/utils-auth'
import ROUTES from './configs/routes'

import home from './pages/home/home.js'
import order from './pages/order/order.js'
import ngo from './pages/ngo/ngo.js'
import movement from './pages/movement/movement.js'
import gift from './pages/gift/gift.js'
import restaurant from './pages/restaurant/restaurant.js'
import corporateandteams from './pages/corporateandteams/corporateandteams.js'
import brandambassador from './pages/brandambassador/brandambassador.js'
const Routes = (props) => {

  return (
    <Switch>
      {/* Not Auth */}
      <Route exact path={ROUTES.home} component={notAuth(home)} />
      <Route exact path={ROUTES.order} component={notAuth(order)} />
      <Route exact path={ROUTES.ngo} component={notAuth(ngo)} />
      <Route exact path={ROUTES.movement} component={notAuth(movement)} />
      <Route exact path={ROUTES.gift} component={notAuth(gift)} />
      <Route exact path={ROUTES.restaurant} component={notAuth(restaurant)} />
      <Route exact path={ROUTES.corporateandteams} component={notAuth(corporateandteams)} />
      <Route exact path={ROUTES.brandambassador} component={notAuth(brandambassador)} /> 
 
      <Redirect from={ROUTES.ROOT} to={ROUTES.home} />
    </Switch>
  )
}

export default Routes
