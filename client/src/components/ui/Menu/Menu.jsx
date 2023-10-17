import React from 'react'
import styles from './Menu.module.scss'
import PropTypes from 'prop-types'
import {menuLinks} from "../../../utils/consts";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {

	const links = menuLinks.leaders

	return (
		<nav className={['flex p-2 fixed bottom-0 left-0 w-full bg-white', styles.menu].join(' ')}>
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