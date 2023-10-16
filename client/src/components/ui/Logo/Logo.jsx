import React from 'react'
import styles from './Logo.module.scss'
import PropTypes from 'prop-types'

const Logo = ({header}) => {


	return (
		<div className={['flex flex-col space-y-3 items-center', styles.logo].join(' ')}>
			<img src="/assets/logo.svg" alt="logo_nidec" style={{width: '80%'}}/>
			<h2 className="font-semibold">{header}</h2>
		</div>
	);
};

Logo.propTypes = {
	prop: PropTypes.string
}

export default Logo;