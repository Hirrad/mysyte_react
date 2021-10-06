import React from "react";
import './gallery.scss'
import Pic1 from '../img/_DSC0085.JPG'
import Pic2 from '../img/_DSC0039.JPG'
import Pic3 from '../img/_DSC0080.JPG'
import Pic4 from '../img/_DSC0129.JPG'
import Pic5 from '../img/_DSC0143.JPG'
import Pic6 from '../img/_DSC0010.JPG'
import Pic7 from '../img/_DSC0011.JPG'
import Pic8 from '../img/_DSC0012.JPG'
import Pic9 from '../img/_DSC0013.JPG'
import Pic10 from '../img/_DSC0014.JPG'
import Pic11 from '../img/_DSC0015.JPG'
import Pic12 from '../img/_DSC0011.JPG'
import {Link} from "react-router-dom";



const Gallery = ()=>{
    return <div className="gallery">
        <div className="gallery_box ">
            <Link to="/page"><img src={Pic1} alt=""/></Link>
            <span>Полонина руна</span>
        </div>
        <div className="gallery_box ">
            <Link to="/photo"><img src={Pic2} alt=""/></Link>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic3} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic4} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic5} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic6} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic7} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic8} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic9} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic10} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic11} alt=""/></a>
            <span>Карпаты</span>
        </div>
        <div className="gallery_box ">
            <a href=""><img src={Pic12} alt=""/></a>
            <span>Карпаты</span>
        </div>
    </div>

}

export default Gallery;