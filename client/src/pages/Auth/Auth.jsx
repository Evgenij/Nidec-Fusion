import React, {useState} from 'react'
import styles from './Auth.module.scss'
import PropTypes from 'prop-types'
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import Logo from "../../components/ui/Logo/Logo";
import {Password} from "primereact/password";

const emptyData = {
	login: '',
	password: ''
}

const Auth = () => {

	const [data, setData] = useState(emptyData)

	const auth = () => {
		console.log(data)
	}

	const handlerChange = (e) => {
		setData(prev =>
			({...prev, [e.target.name]: e.target.value})
		)
	}

	return (
		<div className={['flex flex-col justify-center h-full', styles.auth].join(' ')}>
			<Logo header='Nidec for leaders'/>
			<form action="" className='mt-16 flex flex-col space-y-3'>
				<div className="row flex flex-col space-y-2">
					<label htmlFor="login" className='input-label'>Login</label>
					<InputText name='login' value={data.login}
					           aria-describedby="login-help"
					           onChange={e => handlerChange(e)} />
				</div>
				<div className="row flex flex-col space-y-2">
					<label htmlFor="password" className='input-label'>Password</label>
					<Password name='password' value={data.password}
					           aria-describedby="password-help" feedback={false} toggleMask
					           onChange={e => handlerChange(e)} />
				</div>
			</form>
			<div className="mt-8 buttons flex flex-col items-center space-y-4 justify-center">
				<Button onClick={auth} className='w-full'
				        label="Login" icon="pi pi-sign-in" iconPos="right"/>
				<span className='text-slate-500'>or</span>
				<Button onClick={auth} severity="secondary" className='w-full' outlined
				        label="Registration" icon="pi pi-user-plus" iconPos="right"/>
			</div>

		</div>
	);
};

Auth.propTypes = {
	prop: PropTypes.string
}

export default Auth;