import React, { useState, useContext,useEffect } from 'react'
import './account.scss'
import { Link, Navigate } from 'react-router-dom'
import { useLocalStorage } from '../../../../hooks'
import {CurrentUserContext} from '../../../freedomstore-service-context'
import {
    FaPersonThroughWindow,
    FaGear,
    FaPersonHiking
} from '../../../buttons/font-awesome'
const Account = ({ username, setCloseOpenBurger }) => {
    const [, setToken]=useLocalStorage('tokenJWS');
    const [out, setOut]=useState(false)
    const [currentUser,dispatch]=useContext(CurrentUserContext);
    // console.log(token)
    console.log(currentUser)
    console.log('out',out)
    const logOut=(e)=>{
        // setToken('')
        // e.preventDefault();
        console.log('out')
        // localStorage.setItem('tokenJWS','')
        setToken('')
                dispatch({type:'SET_UNAUTHORIZED'})

        setOut(true)
        // return setToken('')
    }
    // const [close, setClose]=useState(false)

    // const closeAccount=(e)=>{
    //     console.log('pop')
    //     e.preventDefault();
    //     e.stopPropagation()
    //     setClose(prev=>!prev)
    // }
    // console.log(close)
    // if(out){
    //     setToken('')
    // }
    // useEffect(() => {
// if(!out)  return

// console.log('out token')
// setToken('')
//     },[out,setToken])
    return <div className='account'>

        <div className='account__name'>

            {username}
            {/* <span className='arrow'></span> */}
        </div>

        <ul className='account__body'>
            <li className='account__list'>
                <Link to='/about' onClick={() => setCloseOpenBurger()} >
                    <FaPersonHiking className='account--icons' />
                    Мій профіль
                </Link>
            </li>
            {/* <li className='account__list'>
                    <Link to={''} onClick={()=>setCloseOpenBurger()}>
                    <FaGear className='account--icons'/>
                     Параметри
                    </Link>
                     </li> */}
            <li className='account__list'>
                <Link to={'/'} onClick={(e)=>logOut(e)}>
                    <FaPersonThroughWindow className='account--icons' />
                    Вийти
                </Link>
            </li>
        </ul>
    </div>
}


//vession 1.0 modal click 

// const Account =({username})=>{
//     const [close, setClose]=useState(false)

//     const closeAccount=(e)=>{
//         console.log('pop')
//         e.preventDefault();
//         e.stopPropagation()
//         setClose(prev=>!prev)
//     }
// console.log(close)
//     return <div className={close?'account active':'accout'}
//     onClick={(e) =>{closeAccount(e)}}>
//     <div className='account__name--wrapper' 
//    >
//     {/* <div className='account__close'
//     onClick={(e) =>{closeAccount(e)}}
//     ></div> */}
//     <div className='account__name'>
//     {username}
//     </div>
//     </div>

//             <ul className='account__body'
//             >
//             {/* <li className='account__list account__list-username'>

//             {username}
//                 </li> */}
//                 <li className='account__list'>
//                 <FaPersonHiking className='account--icons'/>
//                 Мій профіль
//                 </li>
//                 <li className='account__list'>
//                 <FaGear className='account--icons'/>
//                  Параметри
//                  </li>
//                 <li className='account__list'>
//                 <FaPersonThroughWindow className='account--icons'/>
//                  Вийти
//                  </li>
//             </ul>
//     </div>
// }

//End
export default Account;