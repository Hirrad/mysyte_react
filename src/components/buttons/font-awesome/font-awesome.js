import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLongArrowAltDown, faLongArrowAltRight, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import './font-awesome.scss'

const FaFacebook =()=>{
    return  <FontAwesomeIcon icon={faFacebook} className='colorIcon'/>
}
const FaInstagram =()=>{
    return  <FontAwesomeIcon icon={faInstagram} className='colorIcon'/>
}
const FaUserCircle =()=>{
    return  <FontAwesomeIcon icon={faUserCircle} className='colorIcon'/>
}
const FaLongArrowAltDown =()=>{
    return  <FontAwesomeIcon icon={faLongArrowAltDown} className='colorIcon'/>
}
const FaLongArrowAltRight =()=>{
    return  <FontAwesomeIcon icon={faLongArrowAltRight} className='colorIcon'/>
}

export {
    FaFacebook,
    FaInstagram,
    FaUserCircle,
    FaLongArrowAltDown,
    FaLongArrowAltRight
}