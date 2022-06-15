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
const Authorization = ({ active, setActive }) => {
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const urlReg = '/auth/local/register'
    const [{ response: responseReg, isLoading: isLoadingReg, error: errorReg }, doFetchReg] = useFetch(urlReg);
    const urlAuth = '/auth/local/?populate=*'
    const [{ response: responseAuth, isLoading: isLoadingAuth, error: errorAuth }, doFetchAuth] = useFetch(urlAuth);
    const [currentUserState,dispatch]=useContext(CurrentUserContext)
const [,setToken]=useLocalStorage('tokenJWS')
    // const [login, setLogin]=useState(null)
    // const [email, setEmail]=useState(null)
    // const [password, setPassword]=useState(null)
    const emailRef = useRef(null)
    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    //Star* when the active modal window scroll does not work
    !active && document.body.classList.remove('noclick')
    // active && document.body.classList.add('noclick');
    useEffect(() => () => {


     return   document.body.classList.remove('noclick'), []});

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
        
            },[]
        )
        //End*
    const handleSubmit = (e) => {
        e.preventDefault();
if(loginRegistration==='log'){
    doFetchAuth({
        method: 'post',
        data: {
            identifier: emailRef.current.value,
            password: passwordRef.current.value,
        }
    });
    
    return;
}
        doFetchReg({
            method: 'post',
            data: {
                username: loginRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
                
            }, 
               
            
        });

    }
useEffect(()=>{
    if(!responseAuth) return
    setToken(responseAuth.jwt)
    setIsSuccessfullSubmit(true)
    dispatch({
        type: 'SET_AUTHORIZED',
        payload: responseAuth.user
    })
},[responseAuth])
// if(currentUserState.currentUser.hasOwnProperty('id')){
//     setIsSuccessfullSubmit(true)
// }
console.log('response', responseAuth)
    // useEffect(() => {
    //     console.log('response', responseReg)
    // }, [responseReg])
    // if (errorReg) {
    //     console.log(errorReg.response)
    // }
    // if (responseReg) {
    //     console.log(responseReg)
    // }
    // console.log('response', responseReg)
    // console.log('error', errorReg)
    // console.log('auth')
useEffect(()=>{
    if(!isSuccessfullSubmit) return
    setActive(false)
},[isSuccessfullSubmit])
 
    
    return <div className={active ? "modal active" : "modal"}
        onClick={() => closeLogReg()}>
        <div className="modal--form"
            onClick={(e) => e.stopPropagation()}>
            {(isLoadingReg | isLoadingAuth) ? <Spinner styLe={'spinerAuth'} />:null}
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
            {(!responseReg && !responseAuth)  && <Fragment>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <div className="form_title"> {loginRegistration === 'reg' ? 'Реєстрація' : 'Увійти'}</div>

                    {loginRegistration === 'reg' && <label className="label">
                        Логін:
                        <input type="text" className="form__input" placeholder="Введіть логін"
                            ref={loginRef}
                            disabled={isLoadingReg}
                        />
                        <span className='error'> Щось не так з логіном</span>
                        <span className='check'> <FaCheck /></span>
                    </label>}


                    <label className="label">
                        Пошта:
                        <input type="email" className="form__input" placeholder="Введіть пошту"
                            ref={emailRef}
                            disabled={isLoadingReg} />
                        <span className='error'> Щось не так з поштою</span>
                        <span className='check'> <FaCheck /></span>
                    </label>

                    <label className="label password_label">
                        Пароль:
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form__input password__input"
                            placeholder="Введіть пароль"
                            ref={passwordRef}
                            disabled={isLoadingReg}
                        />
                        <span className='error'> Щось не так з паролем</span>
                        <div className="password_btn" onClick={() => setShowPassword((show) =>!show)} >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                            {/* <img src={eys} alt="img"
                        /> */}
                        </div>
                    </label>
                    <button type="submit" className="btn"
                        disabled={isLoadingReg} >
                        {loginRegistration === 'reg' ? 'Зареєструватися' : 'Увійти'}</button>
                </form>
                <div className="login">
                    <span onClick={() => setLoginRegistration(
                        loginRegistration === 'reg' ? 'log' : 'reg')}>
                        {loginRegistration === 'reg' ? 'Або увійдіть!' : 'Зареєструватися'}
                    </span>
                </div>
            </Fragment>}
        </div>
    </div>
}
export default Authorization