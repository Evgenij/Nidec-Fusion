import React from 'react'
import styles from './Dashboard.module.scss'
import PropTypes from 'prop-types'

const Dashboard = ({prop}) => {


	return (
		<div className={['', styles.dashboard].join(' ')}>
			<h2>Dashboard</h2>
		</div>
	);
};

Dashboard.propTypes = {
	prop: PropTypes.string
}

export default Dashboard;