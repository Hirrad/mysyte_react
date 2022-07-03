
import React, { useEffect, useState, useRef, Fragment, useCallback,useMemo } from 'react'
import { FaEyeSlash, FaEye, FaCheck } from '../../buttons/font-awesome'
import { useLocation,Navigate } from 'react-router-dom'
import './reset-password.scss'
import Spinner from "../../spinner"
import { useFetch } from '../../../hooks'
const ResetPassword = () => {
    const {search:urlLocal,pathname}=useLocation()   
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [active, setActive] = useState(false)
    //     const [active, setActive] = useState(false)
    const searchParam=useMemo(()=>new URLSearchParams(urlLocal),[urlLocal]) 
    const urlResetPass='/auth/reset-password'
    const [{ response,isLoading , error}, doFetch]=useFetch(urlResetPass) 
    const passwordRef = useRef('')
    const passwordRepeatRef= useRef('')
    console.log(searchParam)
    console.log(searchParam.has('codje'))
    console.log( pathname)
    
useEffect(()=>{
    if(pathname==='/auth/reset-password'&&searchParam.has('code')){
        setActive(true)
    }
    // response&&setIsSuccessfullSubmit(true)
},[pathname,searchParam,response])

// useEffect(() => {})
// http://localhost:3000/auth/reset-password?code=7d68a76aae3a8490c9d966803326ba420e431ecda075a36bae2cd16c3465152f1c3712fc299e818440129158e3056c9b71c8fe558f9ba9e2335273d06d59006b
    // let messageError;

    const closeLogReg = useCallback(
        () => {
            setActive(false)
            setShowPassword(false)
            setIsSuccessfullSubmit(true)

        }, [setActive]
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchParam.get('code'))
        doFetch({
            method:'post',
           
               data:{
                code:searchParam.get('code') ,
                password: passwordRef.current.value,
                passwordConfirmation: passwordRepeatRef.current.value
               }
            
        })
    }
    
console.log(isLoading)

    if( isSuccessfullSubmit) return <Navigate replace to="/" />



    return <div className={active ? "modal active" : "modal"}
        onClick={() => closeLogReg()}>
        <div className="modal--form"
            onClick={(e) => e.stopPropagation()}>
            {isLoading ? <Spinner styLe={'spinerAuth'} /> : null}
            <span className="close"
                onClick={() => closeLogReg()}></span>
            {response && <div className='responseOk'>
                <p></p>
                <p>Ваш пароль змінено</p>
                <span className='responseOk__buttom'
                    onClick={() => closeLogReg()}>
                    Закрити
                </span>
            </div>}
            {true && <Fragment>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <div className="form_title"></div>
                    
                        <label className="label password_label">
                        Введіть новий пароль:
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form__input password__input"
                                placeholder="Введіть новий пароль"
                                ref={passwordRef}
                                disabled={isLoading}
                                minLength="6"
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form__input password__input"
                                placeholder="Повторіть пароль"
                                ref={passwordRepeatRef}
                                disabled={isLoading}
                                minLength="6"
                                required
                            />

                            {(false || false) && error &&
                                error.status && <span className='error'> 
                                {error.status===500?'Щось пішло не так':'Пароль не співпадає'}
                                </span>}
                            <div className="password_btn" onClick={() => setShowPassword((show) => !show)} >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </label>
                       
                        

                    <button type="submit" className="btn"
                        disabled={false} >
                        Змінити</button>
                </form>


            </Fragment>}
        </div>
    </div>
}
export default ResetPassword