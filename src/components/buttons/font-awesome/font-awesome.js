import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFacebook, faInstagram,faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import {faLongArrowAltDown,
     faLongArrowAltRight,
      faUserCircle,       
      fas
      } from "@fortawesome/free-solid-svg-icons";
import './font-awesome.scss'
library.add(fas, faFontAwesome)
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
const FaEye =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-eye" />
}
const FaEyeSlash =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
}
const FaPersonHiking =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-person-hiking" />
}
const FaMountains =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-mountains" />
}
const FaMountain =()=>{
    return  <FontAwesomeIcon icon="fa-light fa-mountain" />
}
const FaCheck =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-check" />
}
const FaPersonThroughWindow =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-person-through-window" />
}
const FaGear =()=>{
    return  <FontAwesomeIcon icon="fa-solid fa-gear" />
}

export {
    FaFacebook,
    FaInstagram,
    FaUserCircle,
    FaLongArrowAltDown,
    FaLongArrowAltRight,
    FaEyeSlash,
    FaEye,
    FaPersonHiking,
    FaMountains,
    FaMountain,
    FaCheck,
    FaPersonThroughWindow,
    FaGear
}