import React, { useEffect, useState, useRef, Fragment, useCallback, useContext } from 'react'
import './authorization.scss'
// import { Navigate } from 'react-router-dom'
// import eys from '../../img/eye.png'
import { FaEyeSlash, FaEye, FaCheck } from '../buttons/font-awesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFetch } from '../../hooks'
import Spinner from "../spinner"
import { CurrentUserContext } from '../freedomstore-service-context'
import { useLocalStorage } from '../../hooks'
import { errorMassageLogAuth } from '../../utilis'
const Authorization = ({ active, setActive }) => {
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const urlReg = '/auth/local/register'
    const urlMe = '/users/me'
    const urlForgPass='/auth/forgot-password'
    const _baseUrl='http:/localhost:1337'
    const [{ response: responseReg, isLoading: isLoadingReg, error: errorReg }, doFetchReg] = useFetch(urlReg);
    const urlAuth = '/auth/local/?populate=*'
    const [{ response: responseAuth, isLoading: isLoadingAuth, error: errorAuth }, doFetchAuth] = useFetch(urlAuth);
    const [{ response: responseMe, isLoading: isLoadingMe, error: errorMe }, doFetchMe] = useFetch(urlMe);

    const [currentUserState, dispatch] = useContext(CurrentUserContext)
    const [token, setToken] = useLocalStorage('tokenJWS')
    // const [login, setLogin]=useState(null)
    // const [email, setEmail]=useState(null)
    // const [password, setPassword]=useState(null)
    const emailRef = useRef(null)
    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    let messageError;
    //Star* when the active modal window scroll does not work
    !active && document.body.classList.remove('noclick')
    // active && document.body.classList.add('noclick');
    useEffect(() => () => {


        return document.body.classList.remove('noclick')
    }, []);

    //End*
    //Start* changes the active-inactive window and which is the registration-login window
    const [showPassword, setShowPassword] = useState(false)
    const [loginRegistration, setLoginRegistration] = useState('reg')
    const closeLogReg = useCallback(
        () => {
            setActive(false)
            setLoginRegistration('reg')
            setShowPassword(false)
            // console.log(emailRef.current.value)

        }, [setActive]
    )
    //End*
    //Start Forgotten password
    const [{ response: responseForgPass,
         isLoading: isLoadingForgPass,
          error: errorForgPass }, doFetchForgPass] = useFetch(urlForgPass);

        //End Forgotten password

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginRegistration === 'log') {
            doFetchAuth({
                method: 'post',
                data: {
                    identifier: emailRef.current.value,
                    password: passwordRef.current.value,
                }
            });

            return;
        }
        if (loginRegistration === 'reg') {
            doFetchReg({
                method: 'post',
                data: {
                    username: loginRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value
    
                },
    
    
            });

            return;
        }
        if (loginRegistration === 'fogPass') {
            doFetchForgPass({
                method: 'post',
                data: {                    
                    email: emailRef.current.value,
                    // url:`${_baseUrl}/admin/plugins/users-permissions/auth/reset-password`
    
                },
    
    
            });

            return;
        }
        

    }
    if (errorReg) {
        messageError = errorMassageLogAuth(errorReg.data.error.message)
    }
    if (errorAuth) {
        messageError = errorMassageLogAuth(errorAuth.data.error.message)
    }


    useEffect(() => {
        if (!responseAuth) return
        doFetchMe({}, responseAuth.jwt)

        setToken(responseAuth.jwt)

    }, [responseAuth,doFetchMe,setToken])
    useEffect(() => {
        if (!responseMe) return
        setIsSuccessfullSubmit(true)
        dispatch({
            type: 'SET_AUTHORIZED',
            payload: responseMe
        })
    }, [responseMe, dispatch, responseAuth])
    console.log(responseMe)
    console.log(token)
    console.log(messageError)
    useEffect(() => {
        if (!isSuccessfullSubmit) return
        setActive(false)
    }, [isSuccessfullSubmit,setActive])

    console.log(loginRegistration)
    return <div className={active ? "modal active" : "modal"}
        onClick={() => closeLogReg()}>
        <div className="modal--form"
            onClick={(e) => e.stopPropagation()}>
            {(isLoadingReg | isLoadingAuth |isLoadingForgPass) ? <Spinner styLe={'spinerAuth'} /> : null}
            <span className="close"
                onClick={() => closeLogReg()}></span>
            {responseReg && <div className='responseOk'>
                <p>Дякуюмо за реєстрацію!</p>
                <p>Перевірте вашу пошту для підтвердження аккауту!</p>
                <span className='responseOk__buttom'
                    onClick={() => closeLogReg()}>
                    Закрити
                </span>
            </div>}
            {responseForgPass&&
            responseForgPass.ok 
            && <div className='responseOk'>
                <p></p>
                <p>Інструкція для відновлення пароля надіслана вам на пошту</p>
                <span className='responseOk__buttom'
                    onClick={() => closeLogReg()}>
                    Закрити
                </span>
            </div>}
            {(!responseReg && !responseAuth &&!responseForgPass) && <Fragment>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <div className="form_title"> {loginRegistration === 'reg' ? 'Реєстрація' : 'Увійти'}</div>

                    {loginRegistration === 'reg' && <label className="label">
                        Логін:
                        <input type="text" className="form__input" placeholder="Введіть логін"
                            ref={loginRef}
                            disabled={isLoadingReg}
                            minLength="5"
                            required
                        />
                        {(errorReg || errorAuth) && messageError &&
                            messageError.username && <span className='error'> {messageError.username}</span>}
                        {/* <span className='check'> <FaCheck /></span> */}
                    </label>}


                    <label className="label">
                        Пошта:
                        <input type="email" className="form__input" placeholder="Введіть пошту"
                            ref={emailRef}
                            disabled={isLoadingReg}
                            required />
                        {(errorReg || errorAuth) && messageError &&
                            messageError.email && <span className='error'> {messageError.email}</span>}
                        {errorForgPass&& <span className='error'>Користувача не знайдено</span>}

                        {/* <span className='check'> <FaCheck /></span> */}
                    </label>
                    {loginRegistration !== 'fogPass' &&
                        <label className="label password_label">
                            Пароль:
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form__input password__input"
                                placeholder="Введіть пароль"
                                ref={passwordRef}
                                disabled={isLoadingReg}
                                minLength="6"
                                required
                            />
                            {(errorReg || errorAuth) && messageError &&
                                messageError.password && <span className='error'> {messageError.password}</span>}
                            <div className="password_btn" onClick={() => setShowPassword((show) => !show)} >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                {/* <img src={eys} alt="img"
                        /> */}
                            </div>
                        </label>}

                    <button type="submit" className="btn"
                        disabled={isLoadingReg} >
                        {(loginRegistration === 'reg' ||
                            loginRegistration === 'fogPass') ?(loginRegistration === 'fogPass'?
                            'Відновити пароль':'Зареєструватися')  : 'Увійти'}</button>
                </form>
                <div className="login">
                    {loginRegistration !== 'fogPass' ?
                        <span onClick={() => setLoginRegistration(
                            loginRegistration === 'reg' ? 'log' : 'reg')}>
                            {loginRegistration === 'reg' ? 'Або увійдіть!' : 'Зареєструватися'}
                        </span> :
                        <span onClick={() => setLoginRegistration('log')}>
                            Або увійдіть!
                        </span>}
                </div>
                <div className="login">
                    <span onClick={() => setLoginRegistration('fogPass')}>
                        {(loginRegistration === 'reg' ||
                            loginRegistration === 'log') && 'Забули пароль?'}
                    </span>
                </div>
            </Fragment>}
        </div>
    </div>
}
export default Authorization