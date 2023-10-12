import React from 'react'
import styles from './Auth.module.scss'
import PropTypes from 'prop-types'

const Auth = () => {

	return (
		<div className={['', styles.auth].join(' ')}>
			<h1>Auth</h1>
		</div>
	);
};

Auth.propTypes = {
	prop: PropTypes.string
}

export default Auth;