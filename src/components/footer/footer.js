import React from "react";
import "./footer.scss"
import {Link} from "react-router-dom";

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
        {/* <div className="footer_more">
            <ul>
                <li><Link to="page.html">More on The Blog</Link></li>
                <li><Link to="page.html">About MNTN</Link></li>
                <li><Link to="page.html">Contributors & Writers</Link></li>
                <li><Link to="page.html">Write For Us</Link></li>
                <li><Link to="page.html">Contact Us</Link></li>
                <li><Link to="page.html">Privacy Policy</Link></li>
            </ul>
        </div> */}
    </div>
}
export default Footer;