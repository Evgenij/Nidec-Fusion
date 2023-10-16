import React from 'react'
import styles from './Logo.module.scss'
import PropTypes from 'prop-types'

const Logo = ({header, logo}) => {


	return (
		<div className={['flex flex-col space-y-3 items-center', styles.logo].join(' ')}>
			{
				logo ?
				<img src="/assets/logo.svg" alt="logo_nidec" style={{width: '50%'}}/>
				:
				<h2 className={"font-semibold " + (logo ? '' : 'px-3 py-2 bg-primary text-white rounded-lg')}>
					{header}
				</h2>
			}
		</div>
	);
};

Logo.propTypes = {
	prop: PropTypes.string
}

export default Logo;