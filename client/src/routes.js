import Dashboard from "./pages/Dashboard/Dashboard";
import {LOGIN_ROUTE, DASHBOARD_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth/Auth";

export const authRoutes = [
	{
		path: DASHBOARD_ROUTE,
		component: Dashboard
	}
]

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		component: Auth
	}
]

