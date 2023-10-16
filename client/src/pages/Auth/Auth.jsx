import React, {useEffect, useState} from 'react'
import styles from './Auth.module.scss'
import PropTypes from 'prop-types'
import { InputText } from 'primereact/inputtext';
import {Button} from "primereact/button";
import Logo from "../../components/ui/Logo/Logo";
import {Password} from "primereact/password";
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const emptyData = {
	name: '',
	surname: '',
	username: null,
	password: '',
	email: '',
	workshift: '',
	position: ''
}

const Auth = () => {

	//TODO: delete
	const workshifts = [
		{ name: 'Workshift "A"', value: 'a' },
		{ name: 'Workshift "B"', value: 'b' },
		{ name: 'Workshift "C"', value: 'c' },
		{ name: 'Workshift "D"', value: 'd' }
	]
	const positions = [
		{ name: 'Manager', value: 'm' },
		{ name: 'Leader', value: 'l' },
		{ name: 'Process mechanic', value: 'pm' },
		{ name: 'Mechanical engineer', value: 'me' },
		{ name: 'Employee', value: 'e' }
	];

	const [data, setData] = useState(emptyData)
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [acceptEmail, setAcceptEmail] = useState(false)

	const auth = () => {
		console.clear()
		if(isLogin) {
			console.log('Logging...')
		} else {
			console.log('Registrating...')
			console.table(data)
		}

		setData(emptyData)
	}

	const handlerChange = (e) => {
		setData(prev =>
			({...prev, [e.target.name]: e.target.value})
		)
	}

	useEffect(() => {
		if(data.name.length !== 0 && data.surname.length !== 0) {
			setData(prev=>
				({...prev, username: data.name.toLowerCase()+'.'+data.surname.toLowerCase()})
			)
		} else {
			setData(prev=>
				({...prev, username: ''})
			)
		}

	}, [data.name, data.surname]);

	return (
		<div className={['flex flex-col justify-center h-full', styles.auth].join(' ')}>
			<Logo logo={isLogin} header='Registartion'/>
			<form action="" className={'flex flex-col space-y-4 ' + (isLogin ? 'mt-16' : 'mt-6')}>
				{
					!isLogin &&
					<div className="row flex flex-col space-y-2">
						<label htmlFor="workshift" className='input-label'>Workshift</label>
						<Dropdown value={data.workshift}
						          onChange={e => handlerChange(e)} options={workshifts}
						          name='workshift'
						          optionLabel="name"
						          placeholder="Select a workshift"/>
					</div>
				}
				{
					!isLogin &&
					<div className="row flex flex-col space-y-2">
						<label htmlFor="position" className='input-label'>Position</label>
						<Dropdown value={data.position}
						          onChange={e => handlerChange(e)} options={positions}
						          name='position'
						          optionLabel="name"
						          placeholder="Select your position"/>
					</div>
				}
				<div className={"row " + (isLogin ? 'flex' : 'grid grid-cols-2 gap-2')}>
					<div className="col w-full flex flex-col space-y-2">
						<label htmlFor="login" className='input-label'>{isLogin ? 'Login':'Name'}</label>
						<InputText name='name' value={data.name}
						           aria-describedby="login-help"
						           placeholder={isLogin ? 'login':'name'}
						           onChange={e => handlerChange(e)} />
					</div>
					{
						!isLogin &&
						<div className="col flex flex-col space-y-2">
							<label htmlFor="surname" className='input-label'>Surname</label>
							<InputText name='surname' value={data.surname}
							           aria-describedby="login-help"
							           placeholder='surname'
							           onChange={e => handlerChange(e)} />
						</div>
					}
					{
						data.username &&
						<small id="username-help" className='flex col-span-2 items-center text-slate-700'>
							<i className='pi pi-info-circle mr-1 text-blue-500'></i>

							{'Your login: ' + data.username}
						</small>
					}

				</div>
				<div className="row flex flex-col space-y-2">
					<label htmlFor="password" className='input-label'>Password</label>
					<Password name='password' value={data.password}
					          placeholder='password'
					           aria-describedby="password-help" feedback={false} toggleMask
					           onChange={e => handlerChange(e)} />
				</div>
				{
					!isLogin &&
					<div className='flex items-center space-x-2'>
						<Checkbox inputId="checkbox-email" name="checkbox-email"
						          onChange={()=>setAcceptEmail(!acceptEmail)} checked={acceptEmail}/>
						<label htmlFor="checkbox-email">I'd like to send the data to the email</label>
					</div>
				}
				{
					acceptEmail && !isLogin &&
					<div className="row flex flex-col space-y-2">
						<label htmlFor="email" className='input-label'>Email</label>
						<InputText name='email' value={data.email}
						           aria-describedby="login-help"
						           placeholder='email'
						           onChange={e => handlerChange(e)} />
					</div>
				}

			</form>
			<div className="mt-8 buttons flex flex-col items-center space-y-4 justify-center">
				<Button onClick={auth} className='w-full'
				        label={isLogin ? 'Login' : 'Registration'}
				        icon={isLogin ? 'pi pi-sign-in' : 'pi pi-user-plus'} iconPos="right"/>
				<span className='text-slate-500'>or</span>
				<Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
					<Button severity="secondary" className='w-full' outlined
					        label={!isLogin ? 'Login' : 'Registration'}
					        icon={!isLogin ? 'pi pi-sign-in' : 'pi pi-user-plus'} iconPos="right"/>
				</Link>
			</div>

		</div>
	);
};

Auth.propTypes = {
	prop: PropTypes.string
}

export default Auth;