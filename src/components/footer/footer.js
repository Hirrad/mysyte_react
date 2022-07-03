import React from "react";
import "./footer.scss"
import {Link} from "react-router-dom";
import { FaFacebook, FaInstagram, FaTelegram} from "../buttons/font-awesome";

const Footer =()=>{
    const year = new Date();
    return <div className="wrapper_footer">

        <div className="footer_logo">
            <div className="logo">
                <span><Link to='/' >freedom</Link></span>
                <div className="slogan">Живіть сьогодні і зараз, завтра не існує!</div>
            </div>

            <div className="copy">Copyright {year.getFullYear()} Terms & Privacy</div>
        </div>
        <div className="footer_more">
            <ul>
                <li>Контакти</li>
                <span className='d-flex'><li>
                <a href="https://www.facebook.com/HiradCold"  target="_blank" rel="noopener noreferrer">

                <FaFacebook/>
                </a></li>
                {/* <li><Link to="page.html"><FaInstagram/></Link></li>
                <li><Link to="page.html"><FaTelegram/></Link></li> */}
                </span> 
                
            </ul>
        </div>
    </div>
}
export default Footer;