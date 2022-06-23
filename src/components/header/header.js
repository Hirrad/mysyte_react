import React, {useState, useEffect,useContext, memo} from "react";
// import {Link, animateScroll as scroll} from "react-scroll";
import './header.scss'
import Navigation from "../navigation";
// import {FaFacebook, FaInstagram, FaLongArrowAltDown} from "../buttons/font-awesome";
// import SidePanelFollowUs from "./side-panel-follow-us";
import {CurrentUserContext} from '../freedomstore-service-context'
import TitleCap from "./title-cap";
import { useFetch } from "../../hooks";
import {getRandomMinMax} from '../../utilis'
import Spinner from "../spinner";
import {useLocation} from 'react-router-dom'
// import {slide as Menu} from "react-burger-menu";

const Header = () => {
    const [quotesRandom,setQuotesRandom]=useState(0)
    const urlQuotes='/quotes'
    const [{ response:responseQuotes, isLoading:isLoadingQuotes,  error:errorQuotes},doFetchQuotes]=useFetch(urlQuotes);
    const urlQuote=`/quotes/${quotesRandom}`
    const [{ response:responseQuote, response:isLoadingQuote, response:errorQuote},doFetchQuote]=useFetch(urlQuote);
    const [currentUserState, dispatch] = useContext(CurrentUserContext)
/// console.log('currentUserState',currentUserState)
let local=useLocation().pathname;
    useEffect(() => {    
    doFetchQuotes();
},[doFetchQuotes,local])
useEffect(() => {
if(!responseQuotes) return 
setQuotesRandom(getRandomMinMax(1,responseQuotes.meta.pagination.total))
// console.log(responseQuotes)
},[responseQuotes])
// useEffect(() => {
//     if(!responseQuotes) return
//     setInterval(() => {
//         setQuotesRandom(getRandomMinMax(1,responseQuotes.meta.pagination.total))
//     }, 60000);
// })

useEffect(() => {
    if(!errorQuotes) return
    dispatch({
        type:"SET_ERROR",
        payload:errorQuotes
    })

},[errorQuotes,dispatch])
// console.log('Header')
useEffect(() => {
if(quotesRandom===0) return
doFetchQuote()
},[quotesRandom,doFetchQuote])
// console.log(responseQuote)
isLoadingQuote&&<Spinner/>
    return responseQuote&&responseQuote.data&&<header>

        <Navigation/>
                      

        <div className="header-container">
            <div className="header_heading">
                <div className="header_wrapper">
                    <div className="header_tittle"><span></span>{responseQuote.data.attributes.author}</div>
                    <div className="header_text">{responseQuote.data.attributes.text}</div>
                    <TitleCap/>
                </div>
                {/* <SidePanelFollowUs/> */}
            </div>            
        </div>
    
    </header>

    
}



export default Header;