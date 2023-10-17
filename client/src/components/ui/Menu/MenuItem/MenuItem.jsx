import React from 'react'
import styles from './MenuItem.module.scss'
import PropTypes from 'prop-types'
import {Link, useLocation} from "react-router-dom";

const MenuItem = ({href, icon}) => {
	const location = useLocation()
	const currentLocation = location.pathname === href

	return (
		<Link to={href} className={['flex justify-center items-center rounded-lg py-3 '
			+ (currentLocation ? 'bg-primary text-white' : 'text-gray-950'), styles.menuitem].join(' ')}>
			<i className={'pi '+icon}></i>
		</Link>
	);
};

MenuItem.propTypes = {
	prop: PropTypes.string
}

export default MenuItem;