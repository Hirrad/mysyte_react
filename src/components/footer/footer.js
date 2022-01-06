import React from "react";
import "./footer.scss"
import {Link} from "react-router-dom";

const Footer =()=>{
    return <div className="wrapper_footer">
        <div className="footer_logo">
            <div className="logo">
                <span><a href="page.html">freedom</a></span>
                <div className="slogan">Get out there & discover your next slope, mountain & destination!</div>
            </div>

            <div className="copy">Copyright 2019 MNTN, Inc. Terms & Privacy</div>
        </div>
        <div className="footer_more">
            <ul>
                <li><Link to="page.html">More on The Blog</Link></li>
                <li><Link to="page.html">About MNTN</Link></li>
                <li><Link to="page.html">Contributors & Writers</Link></li>
                <li><Link to="page.html">Write For Us</Link></li>
                <li><Link to="page.html">Contact Us</Link></li>
                <li><Link to="page.html">Privacy Policy</Link></li>
            </ul>
        </div>
    </div>
}
export default Footer;