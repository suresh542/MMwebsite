import { URL_MAP } from '../constants/urls'
import { generatePath } from 'react-router'

const {
  BASE_URL, home,order,ngo,movement,gift,restaurant,corporateandteams,brandambassador,
} = URL_MAP

export const buildRoute = (...args) => {
  debugger;
  return (
    args.reduce((prevRoute, item) => {
      return prevRoute + (typeof item === 'number' || item.indexOf('(') === -1 ? `/${item}` : item)
    }, '')
  )
}

export const applyRouteParams = (path, params) => {
  return generatePath(path, params)
}

const ROUTES = {
  ROOT: `/${BASE_URL}`,

  home: buildRoute(home),
  order: buildRoute(order),
  ngo: buildRoute(ngo),
  movement: buildRoute(movement),
  gift: buildRoute(gift),
  restaurant: buildRoute(restaurant),
  corporateandteams: buildRoute(corporateandteams),
  brandambassador: buildRoute(brandambassador),
}

export default ROUTES