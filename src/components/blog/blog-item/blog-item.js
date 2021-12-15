import React from "react";
import './blog-item.scss'

import {FaLongArrowAltRight} from "../../buttons/font-awesome";
import BlogItemNumber from "./blog-item-number";

const BlogItem =(props)=>{

    const {blogItemDb}=props;
    return (
        blogItemDb.map((body,index)=>{
            return <div className="blog" key={index}>
                <div className="blog_content">
                <BlogItemNumber/>
                    {/*<div className="blog_subtitle"><span></span>GEt Started*/}
                    {/*    <span className="blog_number">{counter()}</span></div>*/}

                    <div className="blog_tittle">{body.tittle}</div>
                    <div className="blog_description">
                        {body.described}
                    </div>
                    <div className="blog_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
                </div>
                {console.log(body.img)}
                <div className="blog_picture"><img src={body.img} alt=""/></div>

            </div>
        })

    )
}

export default BlogItem;