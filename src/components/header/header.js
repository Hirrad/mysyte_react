import React, {useState, useEffect} from "react";
// import {Link, animateScroll as scroll} from "react-scroll";
import './header.scss'
import Navigation from "../navigation";
// import {FaFacebook, FaInstagram, FaLongArrowAltDown} from "../buttons/font-awesome";
import SidePanelFollowUs from "./side-panel-follow-us";
import TitleCap from "./title-cap";
import { useFetch } from "../../hooks";
import {getRandomMinMax} from '../../utilis'
import Spinner from "../spinner";
// import {slide as Menu} from "react-burger-menu";

const Header = () => {
    const [quotesRandom,setQuotesRandom]=useState(0)
    const urlQuotes='/quotes'
    const [{ response:responseQuotes, isLoading:isLoadingQuotes,  error:errorQuotes},doFetchQuotes]=useFetch(urlQuotes);
    const urlQuote=`/quotes/${quotesRandom}`
    const [{ response:responseQuote, response:isLoadingQuote, response:errorQuote},doFetchQuote]=useFetch(urlQuote);
useEffect(() => {
    
    doFetchQuotes();
},[doFetchQuotes])
useEffect(() => {
if(!responseQuotes) return
setQuotesRandom(getRandomMinMax(1,responseQuotes.meta.pagination.total))
// console.log(responseQuotes)
},[responseQuotes])

useEffect(() => {
if(quotesRandom===0) return
doFetchQuote()
},[quotesRandom,doFetchQuote])
// console.log(responseQuote)
if(!isLoadingQuote) return <Spinner/>
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