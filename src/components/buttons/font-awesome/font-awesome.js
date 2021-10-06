import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLongArrowAltDown, faLongArrowAltRight, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const FaFacebook =()=>{
    return  <FontAwesomeIcon icon={faFacebook}/>
}
const FaInstagram =()=>{
    return  <FontAwesomeIcon icon={faInstagram}/>
}
const FaUserCircle =()=>{
    return  <FontAwesomeIcon icon={faUserCircle}/>
}
const FaLongArrowAltDown =()=>{
    return  <FontAwesomeIcon icon={faLongArrowAltDown}/>
}
const FaLongArrowAltRight =()=>{
    return  <FontAwesomeIcon icon={faLongArrowAltRight}/>
}
export {
    FaFacebook,
    FaInstagram,
    FaUserCircle,
    FaLongArrowAltDown,
    FaLongArrowAltRight
}