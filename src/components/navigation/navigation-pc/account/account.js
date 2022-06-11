import React, { useState } from 'react'
import  './account.scss'
import {FaPersonThroughWindow,
    FaGear,
    FaPersonHiking} from '../../../buttons/font-awesome'

const Account =({username})=>{
    const [close, setClose]=useState(false)

    const closeAccount=(e)=>{
        console.log('pop')
        e.preventDefault();
        e.stopPropagation()
        setClose(prev=>!prev)
    }
console.log(close)
    return <div className={close?'account active':'accout'}
    onClick={(e) =>{closeAccount(e)}}>
    <div className='account__name--wrapper' 
   >
    <div className='account__close'
    onClick={(e) =>{closeAccount(e)}}
    ></div>
    <div className='account__name'>
    {username}
    </div>
    </div>
    
            <ul className='account__body'
            >
            <li className='account__list account__list-username'>
                
            {username}
                </li>
                <li className='account__list'>
                <FaPersonHiking className='account--icons'/>
                Мій профіль
                </li>
                <li className='account__list'>
                <FaGear className='account--icons'/>
                 Параметри
                 </li>
                <li className='account__list'>
                <FaPersonThroughWindow className='account--icons'/>
                 Вийти
                 </li>
            </ul>
    </div>
}
export default Account;