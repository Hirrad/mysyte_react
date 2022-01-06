import React from "react";
import {FaFacebook, FaInstagram} from "../../buttons/font-awesome";
import './side-panel-follow-us.scss'
import {Link} from "react-router-dom";
const SidePanelFollowUs = () => {
    return <React.Fragment>
        <div className="follow">
        <span>
            Follow us
        </span>
            <span>
            <Link to=""><FaFacebook/></Link>
        </span>
            <span>
            <Link to=""><FaInstagram/></Link>
        </span>
        </div>
    </React.Fragment>

}
export default SidePanelFollowUs;