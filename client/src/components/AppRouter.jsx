import {Route, Routes} from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import {LOGIN_ROUTE, DASHBOARD_ROUTE, ERROR_404_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Page404 from "../pages/Page404/Page404";

const AppRouter = () => {

	return (
		<Routes>
			<Route path={LOGIN_ROUTE} element={<Auth/>}></Route>
			<Route path={REGISTRATION_ROUTE} element={<Auth/>}></Route>
			<Route path={DASHBOARD_ROUTE} element={<Dashboard/>}></Route>
			<Route path={ERROR_404_ROUTE} element={<Page404/>}></Route>
		</Routes>
	)
}

export default AppRouter