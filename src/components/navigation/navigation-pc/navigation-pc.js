import React from "react";
import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaUserCircle} from "../../buttons/font-awesome";
import './navigation-pc.scss'

const NavigationPc=()=>{
    return <div className="nav__container">

        <nav>
            <div className="nav__burger ">
                <span></span>
            </div>
            <ul>
                <li className="nav-tittle "><Link to="/">freedom</Link></li>
                <li className="nav">
                    <ul>
                        <li><Link to="/gallery/">Галерея</Link></li>
                        <li><Link to="/about/">Обо мне</Link></li>
                        <li><Link to="/blog/">Блог</Link></li>
                        <li><Link to="/travel/">В поход с нами</Link></li>
                    </ul>

                </li>

                <li className="nav-account">
                    <FaUserCircle/>
                    <span>Account</span>
                </li>
                <li className="follow__nav">
                    <div className="follow follow-nav">
                        <Link to=""><FaFacebook /></Link>
                        <Link to=""><FaInstagram /></Link>
                    </div>


                </li>
            </ul>


        </nav>

    </div>
}

export default NavigationPc;