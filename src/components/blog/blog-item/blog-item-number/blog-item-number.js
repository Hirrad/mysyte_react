import React from "react";
import makeCounter from "../../../../utilis/count";
import './blog-item-number.scss';
let counter =makeCounter();

const BlogItemNumber=()=>{

    return <div className="blog_subtitle"><span></span>GEt Started
        <span className="blog_number">{counter()}</span></div>
}
export default BlogItemNumber;