import React from "react";
import Pic1 from '../img/_DSC0245.JPG'
import Pic2 from '../img/_DSC0253.JPG'
import Pic3 from '../img/_DSC0131.JPG'
import Pic4 from '../img/_DSC0245.JPG'
import './blog.scss'
import {FaLongArrowAltRight} from "../buttons/font-awesome";

const Blog =()=>{
    return <div className="wrapper_blog">
        <div className="blog">
            <div className="blog_content">
                <div className="blog_subtitle"><span></span>GEt Started
                    <span className="blog_number">01</span></div>
                <div className="blog_tittle">What level of hiker are you?</div>
                <div className="blog_description">Determining what level of hiker you are can be an important tool when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>
                <div className="blog_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>
            <div className="blog_picture"><img src={Pic1} alt=""/></div>

        </div>
        <div className="blog">
            <div className="blog_content">
                <div className="blog_subtitle"><span></span>GEt Started
                    <span className="blog_number">02</span>
                </div>
                <div className="blog_tittle">What level of hiker are you?</div>
                <div className="blog_description">Determining what level of hiker you are can be an important tool when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>
                <div className="blog_footer">read more <i className="fas fa-long-arrow-alt-right"></i></div>
            </div>
            <div className="blog_picture"><img src={Pic2} alt=""/></div>


        </div>
        <div className="blog">
            <div className="blog_content">
                <div className="blog_subtitle"><span></span>GEt Started
                    <span className="blog_number">03</span></div>
                <div className="blog_tittle">What level of hiker are you?</div>
                <div className="blog_description">Determining what level of hiker you are can be an important tool when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>
                <div className="blog_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>
            <div className="blog_picture"><img src={Pic3} alt=""/></div>

        </div>
        <div className="blog">
            <div className="blog_content">
                <div className="blog_subtitle"><span></span>GEt Started
                    <span className="blog_number">01</span></div>
                <div className="blog_tittle">What level of hiker are you?</div>
                <div className="blog_description">Determining what level of hiker you are can be an important tool when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>
                <div className="blog_footer">read more <i className="fas fa-long-arrow-alt-right"></i></div>
            </div>
            <div className="blog_picture"><img src={Pic4} alt=""/></div>

        </div>
    </div>
}
    export default Blog;