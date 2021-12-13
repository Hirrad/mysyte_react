import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import './header.scss'
import Navigation from "../navigation";
import {FaFacebook, FaInstagram, FaLongArrowAltDown} from "../buttons/font-awesome";

const Header = () => {
    return <header>
        <Navigation/>

        <div className="header-container">
            <div className="header_heading">
                <div className="header_wrapper">
                    <div className="header_tittle"><span></span>A Hiking guide</div>
                    <div className="header_text">Be Prepared For The Mountains And Beyond!</div>
                    <Link to='container'
                          activeClass="active"

                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <div className="header_footer"><span className="scroll-down">scroll down </span>


                            <FaLongArrowAltDown/>
                        </div>
                    </Link>

                </div>
                <div className="follow">
                <span>
                    Follow us
                </span>
                    <span>
                    <a href=""><FaFacebook/></a>
                </span>
                    <span>

                    <a href=""><FaInstagram/></a>
                </span>
                </div>
            </div>
        </div>

    </header>
}

export default Header;