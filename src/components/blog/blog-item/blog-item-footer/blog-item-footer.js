import React from "react";
import './blog-item-footer.scss'
import {FaLongArrowAltRight} from "../../../buttons/font-awesome";

const BlogItemFooter= ()=>{
    return   <div className="blog_footer">
        <a href="/">read more <FaLongArrowAltRight/></a>
    </div>

}
export default BlogItemFooter;