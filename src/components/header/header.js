import React from "react";

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
                    <div className="header_footer"><span className="scroll-down">scroll down</span>

                        <FaLongArrowAltDown/>
                    </div>

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