import React from 'react'
import styles from './Menu.module.scss'
import PropTypes from 'prop-types'
import {DASHBOARD_ROUTE, ERROR_404_ROUTE, LOGIN_ROUTE} from "../../../utils/consts";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {

	const links = [
		{
			href: LOGIN_ROUTE,
			icon: 'pi-user'
		},
		{
			href: DASHBOARD_ROUTE,
			icon: 'pi-user'
		},
		{
			href: ERROR_404_ROUTE,
			icon: 'pi-user'
		},
		{
			href: DASHBOARD_ROUTE,
			icon: 'pi-user'
		},
		{
			href: ERROR_404_ROUTE,
			icon: 'pi-user'
		},
	]

	return (
		<nav className={['flex p-2 absolute bottom-0 left-0 w-full bg-white border-2 border-slate-500', styles.menu].join(' ')}>
			{
				links.map((link, index) => {
					return <MenuItem key={index} href={link.href} icon={link.icon}/>
				})
			}
		</nav>
	);
};

Menu.propTypes = {
	prop: PropTypes.string
}

export default Menu;