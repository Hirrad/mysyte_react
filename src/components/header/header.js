import React from "react";
// import {Link, animateScroll as scroll} from "react-scroll";
import './header.scss'
import Navigation from "../navigation";
// import {FaFacebook, FaInstagram, FaLongArrowAltDown} from "../buttons/font-awesome";
import SidePanelFollowUs from "./side-panel-follow-us";
import TitleCap from "./title-cap";
// import {slide as Menu} from "react-burger-menu";

const Header = () => {
    return <header>

        <Navigation/>
        <div className="header-container">
            <div className="header_heading">
                <div className="header_wrapper">
                    <div className="header_tittle"><span></span>A Hiking guide</div>
                    <div className="header_text">Be Prepared For The Mountains And Beyond!</div>
                    <TitleCap/>
                </div>
                <SidePanelFollowUs/>
            </div>
        </div>

    </header>
}



export default Header;