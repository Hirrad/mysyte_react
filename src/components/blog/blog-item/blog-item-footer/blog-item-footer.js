import React from "react";
import './blog-item-footer.scss'
import {FaLongArrowAltRight} from "../../../buttons/font-awesome";
import {Link} from "react-router-dom";
import {Page} from "../../../pages";
const BlogItemFooter= ()=>{
    return   <div className="blog_footer">
                <Link to={{
            pathname: "/page1",
            pagesContent: <Page/>
        }}>read more <FaLongArrowAltRight/></ Link>

    </div>

}
export default BlogItemFooter;