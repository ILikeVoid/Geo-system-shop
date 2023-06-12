import React, {useEffect} from "react";
import s from "./LoginPage.module.scss"
import LoginForm from "../../forms/LoginForm";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux'

const LoginPage = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth === true){
            navigate("/")
        }
    }, [])

    return (
        <div className={s.login}>
            <LoginForm />
        </div>
    )
}

export default LoginPage
