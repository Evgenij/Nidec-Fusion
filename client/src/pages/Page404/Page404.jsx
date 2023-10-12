import React from 'react'
import styles from './Page404.module.scss'
import PropTypes from 'prop-types'

const Page404 = ({prop}) => {


	return (
		<div className={['text-red-700 font-semibold', styles.page404].join(' ')}>
			<h1>Error 404</h1>
		</div>
	);
};

Page404.propTypes = {
	prop: PropTypes.string
}

export default Page404;