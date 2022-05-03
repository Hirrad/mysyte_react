import React from "react";
import './blog-item.scss'

import BlogItemNumber from "./blog-item-number";
import ItemFooter from "../../item-footer";

const BlogItem =(props)=>{

    const {blogItemDb}=props;
    return (
        blogItemDb.map((body,index)=>{
            return <div className="blog" key={index}>
                <div className="blog_content">
                <BlogItemNumber number={index+1}/>
                    <div className="blog_tittle">{body.tittle}</div>
                    <div className="blog_description">
                        {body.described}
                    </div>
                    <ItemFooter id={body.id} styleTeg="blog_footer" section='blog'/>
                </div>
                {/*{console.log(body.img)}*/}
                <div className="blog_picture"><img src={body.img} alt=""/></div>

            </div>
        })

    )
}

export default BlogItem;