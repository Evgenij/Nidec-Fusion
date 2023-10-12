import Dashboard from "./pages/Dashboard/Dashboard";
import {AUTH_ROUTE, DASHBOARD_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth/Auth";

export const authRoutes = [
	{
		path: DASHBOARD_ROUTE,
		component: Dashboard
	}
]

export const publicRoutes = [
	{
		path: AUTH_ROUTE,
		component: Auth
	}
]

