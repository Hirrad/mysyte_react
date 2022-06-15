import React, { useContext, useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaUserCircle } from "../../buttons/font-awesome";
import { CurrentUserContext } from "../../freedomstore-service-context";
import { scroller } from "react-scroll";
import Authorization from "../../authorization";
import Account from './account'
import './navigation-pc.scss'

const NavigationPc = ({ db }) => {
    const [modalRegistration, setlRegistration] = useState(false)
    const [closeOpenBurger, setCloseOpenBurger] = useState(false)

    const [currentUserState] = useContext(CurrentUserContext);

    const pushingBurger = (e) => {
        e.preventDefault(e);
        e.stopPropagation(e);
        setCloseOpenBurger(closeBurger => !closeBurger)
        // setModalDropList(closeModal=>!closeModal)
        console.log('tuta')
    }
    //     const [mobile, setMobile]=useState(document.documentElement.clientWidth)

    //     console.log(mobile)

    //     const widthScreen= ()=>{

    //         setMobile(document.documentElement.clientWidth)

    //     }
    // if(mobile===981){
    //     setCloseOpenBurger(closeBurger=>!closeBurger)
    // }
    // useEffect(() => {

    //    return window.addEventListener("resize",widthScreen)



    // },[mobile])

    console.log(currentUserState)
    const home = db.data.find((data) => {
        return data.attributes.home === true
    });
    return <div className={closeOpenBurger ? 'nav__container active' : 'nav__container'}
        onClick={(e) => pushingBurger(e)}>
        <div className={closeOpenBurger ? 'nav__burger active' : 'nav__burger'}
            onClick={(e) => pushingBurger(e)}>
            <span></span>
        </div>
        <nav onClick={(e) => e.stopPropagation(e)}>

            <ul>
                <li className="nav-tittle "><NavLink to={home.attributes.url_navigation}
                    onClick={(e) => pushingBurger(e)}>
                    {home.attributes.name}
                </NavLink></li>
                <li className="nav">
                    <ul >
                        {db.data.map((data, index) => {

                            if (data.attributes.home) return null
                            return <li key={index} onClick={(e) => pushingBurger(e)}>
                                {/* <Skrol
                                    to='container'
                                    activeClass="active"

                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}> */}

                                <NavLink to={data.attributes.url_navigation}
                                    onClick={() => scroller.scrollTo('container', {
                                        spy: true,
                                        smooth: true,
                                        offset: 0,
                                        duration: 500
                                    })}>
                                    {data.attributes.name}
                                </NavLink>

                                {/* </Skrol> */}
                            </li>


                        })}
                        {/* <li><Link to="/gallery">Галерея</Link></li> */}
                        {/* <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/travel">В поход с нами</Link></li> */}
                    </ul>

                </li>

                {!currentUserState.isLoggedIn && <li className="nav-account"
                    onClick={(e) => pushingBurger(e)}>
                    <Link to='/'
                        onClick={() => setlRegistration(true)}>
                        <FaUserCircle />
                        <span>Account</span>
                    </Link>

                </li>}
                {currentUserState.isLoggedIn && <li>
                    {/* {currentUserState.currentUser.username} */}
                    <Account username={currentUserState.currentUser.username}
                     setCloseOpenBurger={setCloseOpenBurger}/>
                </li>}
                <li className="follow__nav">
                    <div className="follow follow-nav">
                        <NavLink to=""><FaFacebook /></NavLink>
                        <Link to=""><FaInstagram /></Link>
                    </div>


                </li>
            </ul>


        </nav>

        {modalRegistration && <Authorization active={modalRegistration} setActive={setlRegistration} />}
    </div>
}
// modalActive&&
export default NavigationPc;