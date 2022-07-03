
import React, { useEffect, useState, useRef, Fragment, useCallback, useContext } from 'react'
import { FaEyeSlash, FaEye, FaCheck } from '../buttons/font-awesome'

import './authorization.scss'
import Spinner from "../spinner"
const ModalWindows = ({ active, setActive }) => {
    
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
//     const [active, setActive] = useState(false)

    const passwordRef = useRef(null)
    let messageError;   
    !active && document.body.classList.remove('noclick')
    // active && document.body.classList.add('noclick');
    useEffect(() => () => {


        return document.body.classList.remove('noclick')
    }, []);
    const closeLogReg = useCallback(
        () => {
            setActive(false)
            setShowPassword(false)
            // console.log(emailRef.current.value)

        }, [setActive]
    )
    const handleSubmit = (e) => {
        e.preventDefault();
    }



    useEffect(() => {
        if (!isSuccessfullSubmit) return
                setActive(false)
    }, [isSuccessfullSubmit,setActive])

   
    return <div className={active ? "modal active" : "modal"}
        onClick={() => closeLogReg()}>
        <div className="modal--form"
            onClick={(e) => e.stopPropagation()}>
            {(false) ? <Spinner styLe={'spinerAuth'} /> : null}
            <span className="close"
                onClick={() => closeLogReg()}></span>
            {false && <div className='responseOk'>
                <p>Дякуюмо за реєстрацію!</p>
                <p>Перевірте вашу пошту для підтвердження аккауту!</p>
                <span className='responseOk__buttom'
                    onClick={() => closeLogReg()}>
                    Закрити
                </span>
            </div>}
            {false&& <div className='responseOk'>
                <p></p>
                <p>Інструкція для відновлення пароля надіслана вам на пошту</p>
                <span className='responseOk__buttom'
                    onClick={() => closeLogReg()}>
                    Закрити
                </span>
            </div>}
            {(false) && <Fragment>
                <form onSubmit={(e) => handleSubmit(e)} >

                    <div className="form_title"> {false ? 'Реєстрація' : 'Увійти'}</div>





                    {false &&
                        <label className="label password_label">
                            Пароль:
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form__input password__input"
                                placeholder="Введіть пароль"
                                ref={passwordRef}
                                disabled={false}
                                minLength="6"
                                required
                            />
                            {(false || false) && messageError &&
                                messageError.password && <span className='error'> {messageError.password}</span>}
                            <div className="password_btn" onClick={() => setShowPassword((show) => !show)} >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                {/* <img src={eys} alt="img"
                        /> */}
                            </div>
                        </label>}

                    <button type="submit" className="btn"
                        disabled={false} >
                       'Увійти'</button>
                </form>


            </Fragment>}
        </div>
    </div>
}
export default ModalWindows