import React, {useState} from 'react'
import styles from './Auth.module.scss'
import PropTypes from 'prop-types'
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import Logo from "../../components/ui/Logo/Logo";

const emptyData = {
	login: '',
	password: ''
}

const Auth = () => {

	const [data, setData] = useState(emptyData)

	const auth = e => {
		console.log(data)
		e.preventDefault()
	}

	const handlerChange = (e) => {
		setData(prev => ({...prev, [e.target.name]: e.target.value}))
		console.log(data)
	}

	return (
		<div className={['flex flex-col justify-center h-full', styles.auth].join(' ')}>
			<Logo header='Nidec for leaders'/>
			<form action="" onSubmit={e=>auth(e)}>
				<InputText name='login' value={data.login}
				           onChange={e => handlerChange(e)} />
				<Button label='Login'></Button>
			</form>
		</div>
	);
};

Auth.propTypes = {
	prop: PropTypes.string
}

export default Auth;