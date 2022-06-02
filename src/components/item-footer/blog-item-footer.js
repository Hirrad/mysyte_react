import React from "react";
import './blog-item-footer.scss'
import {FaLongArrowAltRight} from '../buttons/font-awesome'
// import {FaLongArrowAltRight} from "../../../buttons/font-awesome";
import {Link} from "react-router-dom";
import {scroll} from '../../utilis'
// import {Page} from "../../../pages";
const ItemFooter= ({id,styleTeg,section})=>{

    return   <div className={styleTeg}>
                <Link to={`/${section}/${id}`} 
                onClick={() =>scroll()}>

                read more <FaLongArrowAltRight/>
                </ Link>

    </div>
    // <div className="blog_footer">
    //     <Link to={{
    //         pathname: "/page1",
    //         pagesContent: <Page/>
    //     }}>read more <FaLongArrowAltRight/></ Link>
    //
    // </div>

}
export default ItemFooter;