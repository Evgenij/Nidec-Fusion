import React from 'react'
import styles from './MenuItem.module.scss'
import PropTypes from 'prop-types'
import {Link, useLocation} from "react-router-dom";
import { Badge } from 'primereact/badge';

const MenuItem = ({href, icon, notifications= 0}) => {
	const location = useLocation()
	const currentLocation = location.pathname === href

	return (
		<Link to={href} className={['relative flex justify-center items-center rounded-lg py-3 '
			+ (currentLocation ? 'bg-primary text-white' : 'bg-slate-100 text-gray-950'), styles.menuitem].join(' ')}>
			<i className={'pi '+icon}></i>
			{
				notifications !== 0 &&
				<Badge className='absolute -top-3 right-1' severity="danger" value={notifications}></Badge>
			}

		</Link>
	);
};

MenuItem.propTypes = {
	prop: PropTypes.string
}

export default MenuItem;