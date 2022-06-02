import React from 'react'
import './authorization.scss'
import {Link} from 'react-router-dom'
const Authorization = ()=>{
    return <div className="wrapper">
    <div className="wrapper--form">
    <span className="close"></span>    
    <form>
      <div className="form_title">Регистрация</div>

      <label className="label">
        Логин:
        <input type="text" className="form__input" placeholder="Введите логин" />
      </label>
      <label className="label password_label">
        Пароль:
        <input
          type="password"
          className="form__input password__input"
          placeholder="Введите пароль"
        />
        <div className="password_btn">
          <img src="img/eye.png" alt="img" />
        </div>
      </label>
      <button type="submit" className="btn">Зарегестрироваться</button>
    </form>
    <div className="login">
    <Link to='/login'>
    Або увійдіть
    </Link>
        
    </div>
    </div>
  </div>
}
export default Authorization