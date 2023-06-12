import React, {useEffect, useState} from "react";
import s from "../../pages/LoginPage/LoginPage.module.scss";
import logo from "../../assets/img/martz-logo.png";
import LoginIcon from "@mui/icons-material/Login";
import {NavLink, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {login} from "../../redux/Slices/userSlice.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {setLoginInputsState} from "../../redux/Slices/inputsSlice";
import HomeIcon from '@mui/icons-material/Home';

export interface ILoginFormInput {
    email: string
    password: string
}

const LoginForm = () => {
    const [incorrectError, setIncorrectError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const userData = useAppSelector(state => state.user)
    const inputsValues = useAppSelector(state => state.inputs.login_inputs)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {handleSubmit, register, formState: {errors, isValid}, reset} = useForm<ILoginFormInput>({
        mode: "onBlur", defaultValues: {
            email: inputsValues.email,
            password: inputsValues.password
        },
    })

    useEffect(() => {
        let newLoginInputsState: ILoginFormInput = {
            email: emailValue,
            password: passwordValue
        }
        dispatch(setLoginInputsState(newLoginInputsState))
    }, [emailValue, passwordValue])


    const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
        if ((userData.email === data.email) && (userData.password === data.password)) {
            setIncorrectError(false)
            dispatch(login(true))
            reset()
            navigate("/")
        } else {
            setIncorrectError(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                    <span className={s.home} onClick={() => navigate("/")}>
                    <HomeIcon fontSize="large"/></span>
                </div>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                    <span>Добро пожаловать! Пожалуйста, введите свои данные</span>
                </div>
                <div className={s.email}>
                    <input placeholder="Email" type="email"
                           {...register("email", {
                               required: "Поле, обязательное для заполнения!", pattern: {
                                   value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$/,
                                   message: 'Введите, пожалуйста, действительный адрес электронной почты',
                               },
                               onChange: (e) => {setIncorrectError(false); setEmailValue(e.target.value)}
                           })}
                           className={errors.email || incorrectError ? s.error_input : ""}
                    />
                    {errors.email ? <span>{errors.email.message}</span> : null}
                </div>
                <div className={s.password}>
                    <div className={s.password_input}>
                        <input placeholder="Password"
                               type={showPassword ? "text" : "password"}
                               {...register("password", {
                                   required: "Поле, обязательное для заполнения!",
                                   onChange: (e) => {setIncorrectError(false); setPasswordValue(e.target.value)}
                               })}
                               className={errors.password || incorrectError ? s.error_input : ""}
                        />
                        <div onClick={() => setShowPassword(!showPassword)}><VisibilityIcon fontSize="large"/></div>
                    </div>
                </div>
                {incorrectError ?
                    <span className={s.incorrectError}>{"Ваш адрес электронной почты или пароль неверны"}</span> : null}
                <button disabled={!isValid}>Войти <LoginIcon/></button>
                <span>Нет аккаунта? <NavLink to="/sign-up">Зарегистрироваться</NavLink></span>
            </form>
        </>
    )
}

export default LoginForm