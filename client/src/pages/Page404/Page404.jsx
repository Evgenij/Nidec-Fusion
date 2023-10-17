import React from 'react'
import styles from './Page404.module.scss'
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";


const Page404 = () => {

	const navigate = useNavigate()


	return (
		<div className={['h-full flex flex-col space-y-8 items-center justify-center', styles.page404].join(' ')}>
			<img src="/assets/404_error.svg" alt="404" width={'80%'}/>
			<h3>Page don't found</h3>
			<Button onClick={()=>navigate(-1)} icon='pi pi-undo' label='Back'/>
		</div>
	);
};

export default Page404;