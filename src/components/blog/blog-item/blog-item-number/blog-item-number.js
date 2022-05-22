import React from "react";
import Moment from 'react-moment';
import './blog-item-number.scss';


const BlogItemNumber=({date})=>{

// const {number}=props;
    return <div className="blog_subtitle">
        <span> </span> 
        {/*<span className="blog_number">{number}</span>*/}
        <Moment date={date} format="YYYY-MM-DD HH:mm">
               
            </Moment>
       
        </div>
}
export default BlogItemNumber;