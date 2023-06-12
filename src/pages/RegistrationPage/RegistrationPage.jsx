import React, { useEffect, useState } from 'react'
import s from './Registration.module.scss'
import RegisterForm from '../../forms/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const RegistrationPage = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const [registerSuccessfulMessageActive, setRegisterSuccessfulMessageActive] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth === true) {
			navigate('/')
		}
	}, [])

	return (
		<div className={s.registration}>
			<RegisterForm registerSuccessfulMessageActive={registerSuccessfulMessageActive}
										setRegisterSuccessfulMessageActive={setRegisterSuccessfulMessageActive} />
		</div>
	)
}

export default RegistrationPage