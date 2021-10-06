import React from "react";
import {FaLongArrowAltRight} from "../buttons/font-awesome";
import Pic1 from '../img/_DSC0245.JPG';
import Pic2 from '../img/_DSC0131.JPG';
import Pic3 from '../img/_DSC0011.JPG';
import Pic4 from '../img/_DSC0015.JPG';
import './travel.scss'
const Travel = ()=>{
    return <div className="wrapper_traver">
        <div className="traver">
            <div className="traver_content">
                <div className="traver_subtitle"><span></span>01.12.1234<span></span>
                </div>
                <div className="traver_tittle">What level of hiker are you?</div>
                <div className="traver_picture"><img src={Pic1} alt=""/></div>
                <div className="traver_description">Determining what level of hiker you are can be an important tool
                    when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>

                <div className="traver_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>


        </div>
        <div className="traver">
            <div className="traver_content">
                <div className="traver_subtitle"><span></span>01.12.1234<span></span>
                </div>
                <div className="traver_tittle">What level of hiker are you?</div>
                <div className="traver_picture"><img src={Pic2} alt=""/></div>
                <div className="traver_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                    delectus, doloribus eaque eligendi id libero maiores molestiae quia quos? Amet asperiores, at cumque
                    deserunt eius est explicabo facere harum id impedit ipsa ipsam itaque laudantium libero magni maxime
                    modi neque nesciunt quibusdam quis quisquam reiciendis rem repellendus sint sunt ullam vel velit
                    veritatis voluptatem voluptatum? Cumque laudantium optio qui reiciendis ut, voluptas. Aliquam at
                    beatae delectus ducimus fugiat nobis praesentium quaerat repellendus veritatis vitae! Aliquid
                    asperiores delectus earum libero maiores mollitia nobis numquam provident quaerat sapiente, sed sit
                    soluta voluptatem! Ab adipisci dolores, enim facilis laborum neque perspiciatis possimus
                    repudiandae.
                </div>

                <div className="traver_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>


        </div>
        <div className="traver">
            <div className="traver_content">
                <div className="traver_subtitle"><span></span>01.12.1234<span></span>
                </div>
                <div className="traver_tittle">What level of hiker are you?</div>
                <div className="traver_picture"><img src={Pic3} alt=""/></div>
                <div className="traver_description">Determining what level of hiker you are can be an important tool
                    when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>

                <div className="traver_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>


        </div>
        <div className="traver">
            <div className="traver_content">
                <div className="traver_subtitle"><span/>01.12.1234<span/>
                </div>
                <div className="traver_tittle">What level of hiker are you?</div>
                <div className="traver_picture"><img src={Pic4} alt=""/></div>
                <div className="traver_description">Determining what level of hiker you are can be an important tool
                    when
                    planning future hikes. This hiking level guide will help you plan hikes according to different hike
                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –
                    novice, moderate, advanced moderate, expert, or expert backpacker?
                </div>

                <div className="traver_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>
            </div>


        </div>


    </div>

}

export default Travel;