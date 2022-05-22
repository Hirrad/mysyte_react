import React from "react";
import './blog-item.scss'

import BlogItemNumber from "./blog-item-number";
import ItemFooter from "../../item-footer";

const BlogItem =({bd})=>{
console.log('item',bd)
    return (
        bd.map((body,index)=>{
            return <div className="blog" key={body.id}>
                <div className="blog_content">
                <BlogItemNumber number={index+1} date={body.date}/>
                    <div className="blog_tittle">{body.tittle}</div>
                    <div className="blog_description">
                        {body.description}
                    </div>
                    <ItemFooter id={body.id} styleTeg="blog_footer" section='blog'/>
                </div>
                {/*{console.log(body.img)}*/}
                <div className="blog_picture"><img src={body.url} alt=""/></div>

            </div>
        })

    )
}

export default BlogItem;