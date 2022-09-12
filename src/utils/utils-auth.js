import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import ROUTES from '../configs/routes'
import React, { Component } from 'react'
import { getState } from '../store/store'
import { ROLES } from "../configs/index";
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const locationHelper = locationHelperBuilder({})

export const auth = connectedRouterRedirect({
  allowRedirectBack: true,
  authenticatedSelector: state => {
    return !!state.rSession['Success']
  },
  redirectPath: (state, ownProps) => {
    if (ownProps.location.pathname.indexOf('?') === -1) {
      return ROUTES.Home
    }
    return locationHelper.getRedirectQueryParam(ownProps) || ROUTES.Home
  },
  wrapperDisplayName: 'UserIsAuthenticated'
})

export const notAuth = connectedRouterRedirect({
  allowRedirectBack: false,
  authenticatedSelector: state => !state.rSession['Success'],
  redirectPath: (state, ownProps) => {
    if (ownProps.location.pathname.indexOf('?') === -1) {
      return ROUTES.ROOT
    }
    return locationHelper.getRedirectQueryParam(ownProps) || ROUTES.ROOT
  },
  wrapperDisplayName: 'UserIsNotAuthenticated'
})

{/* Order:-Admin, Hr, Manager, Employee, Security */ }
export const checkRole = (Admin, Hr, Manager, Employee, Security) => {
  class CheckRole extends Component {
    constructor(props) {
      super(props)
      this._currentState = getState();
    }

    render() {
      const { rSession } = this._currentState;
      const role = rSession.UserViewModel.AccessGroupId;
debugger;
      if (role === ROLES.ADMIN)
        return (Admin === null) ? <ErrorPage /> : <Admin {...this.props} />
      else if (role === ROLES.HR)
        return (Hr === null) ? <ErrorPage /> : <Hr {...this.props} />
      else if (role === ROLES.MANAGER)
        return (Manager === null) ? <ErrorPage /> : <Manager {...this.props} />
      else if (role === ROLES.EMPLOYEE)
        return (Employee === null) ? <ErrorPage /> : <Employee {...this.props} />
      else if (role === ROLES.SECURITY)
        return (Security === null) ? <ErrorPage /> : <Security {...this.props} />
      else
        return <ErrorPage />
    }
  }

  CheckRole.displayName = `CheckRole`;
  return CheckRole;

}
