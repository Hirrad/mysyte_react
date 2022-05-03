import React from "react";
import './title-cap.scss'
import {Link} from "react-scroll";
// import {Link, animateScroll as scroll} from "react-scroll";
import {FaLongArrowAltDown} from "../../buttons/font-awesome";

const TitleCap=()=>{
    return                     <Link to='container'
                                     activeClass="active"

                                     spy={true}
                                     smooth={true}
                                     offset={-70}
                                     duration={500}>
        <div className="header_footer"><span className="scroll-down">scroll down </span>


            <FaLongArrowAltDown/>
        </div>
    </Link>
}

export default TitleCap;