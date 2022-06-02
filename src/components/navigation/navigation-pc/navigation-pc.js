import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaUserCircle } from "../../buttons/font-awesome";
import {scroller}  from "react-scroll";
import './navigation-pc.scss'

const NavigationPc = ({ db }) => {
    const home = db.data.find((data) => {
        return data.attributes.home === true
    });
    return <div className="nav__container">

        <nav>
            <div className="nav__burger ">
                <span></span>
            </div>
            <ul>
                <li className="nav-tittle "><NavLink to={home.attributes.url_navigation}>{home.attributes.name}</NavLink></li>
                <li className="nav">
                    <ul>
                        {db.data.map((data, index) => {

                            if (data.attributes.home) return null
                            return <li key={index}>
                                {/* <Skrol
                                    to='container'
                                    activeClass="active"

                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}> */}

                                    <NavLink to={data.attributes.url_navigation}
                                    onClick ={()=>  scroller.scrollTo('container',{
                                        spy:true,
                                    smooth:true,
                                    offset:0,
                                    duration:500
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

                 <li className="nav-account">
                 <Link to='/auth'>
<FaUserCircle />
                    <span>Account</span>    
                 </Link>
                    
                </li>
                {/*<li className="follow__nav">
                    <div className="follow follow-nav">
                        <NavLink to=""><FaFacebook /></NavLink>
                        <Link to=""><FaInstagram /></Link>
                    </div>


                </li> */}
            </ul>


        </nav>

    </div>
}

export default NavigationPc;