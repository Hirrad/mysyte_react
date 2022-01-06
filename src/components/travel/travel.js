import React from "react";
// import {FaLongArrowAltRight} from "../buttons/font-awesome";
import Pic1 from '../img/_DSC0245.JPG';
import Pic2 from '../img/_DSC0131.JPG';
import Pic3 from '../img/_DSC0011.JPG';
import Pic4 from '../img/_DSC0015.JPG';
import './travel.scss'
import TravelItem from "./travel-item";
const dataTravel = [{
    id: 0,
    data: '01.12.1234',
    tittle: 'What level of hiker are you?',
    picture: Pic1,
    description: 'Determining what level of hiker you are can be an important tool\n' +
        '                    when\n' +
        '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
        '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
        '                    novice, moderate, advanced moderate, expert, or expert backpacker?',
    text: 'Determining what level of hiker you are can be an important tool\n' +
        '                    when\n' +
        '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
        '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
        '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
        'Determining what level of hiker you are can be an important tool\n' +
        '                    when\n' +
        '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
        '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
        '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
        'Determining what level of hiker you are can be an important tool\n' +
        '                    when\n' +
        '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
        '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
        '                    novice, moderate, advanced moderate, expert, or expert backpacker?'
},
    {
        id: 1,
        data: '01.12.1324',
        tittle: 'What level of hiker are you?',
        picture: Pic4,
        description: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?',
        text: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?'
    },
    {
        id: 2,
        data: '01.12.1245',
        tittle: 'What level of hiker are you?',
        picture: Pic2,
        description: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?',
        text: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?'
    },
    {
        id: 3,
        data: '01.12.1212',
        tittle: 'What level of hiker are you?',
        picture: Pic3,
        description: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?',
        text: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?'
    },
    {
        id: 4,
        data: '01.12.1254',
        tittle: 'What level of hiker are you?',
        picture: Pic4,
        description: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?',
        text: 'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?' +
            'Determining what level of hiker you are can be an important tool\n' +
            '                    when\n' +
            '                    planning future hikes. This hiking level guide will help you plan hikes according to different hike\n' +
            '                    ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –\n' +
            '                    novice, moderate, advanced moderate, expert, or expert backpacker?'
    }];
const Travel = () => {
    return <div className="wrapper_travel">
        <TravelItem dataTravel={dataTravel}/>
        {/*<div className="travel">*/}
        {/*    <div className="travel_content">*/}
        {/*        <div className="travel_subtitle"><span></span>01.12.1234<span></span>*/}
        {/*        </div>*/}
        {/*        <div className="travel_tittle">What level of hiker are you?</div>*/}
        {/*        <div className="travel_picture"><img src={Pic1} alt=""/></div>*/}
        {/*        <div className="travel_description">Determining what level of hiker you are can be an important tool*/}
        {/*            when*/}
        {/*            planning future hikes. This hiking level guide will help you plan hikes according to different hike*/}
        {/*            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –*/}
        {/*            novice, moderate, advanced moderate, expert, or expert backpacker?*/}
        {/*        </div>*/}

        {/*        <div className="travel_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>*/}
        {/*    </div>*/}


        {/*</div>*/}
        {/*<div className="travel">*/}
        {/*    <div className="travel_content">*/}
        {/*        <div className="travel_subtitle"><span></span>01.12.1234<span></span>*/}
        {/*        </div>*/}
        {/*        <div className="travel_tittle">What level of hiker are you?</div>*/}
        {/*        <div className="travel_picture"><img src={Pic2} alt=""/></div>*/}
        {/*        <div className="travel_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid*/}
        {/*            delectus, doloribus eaque eligendi id libero maiores molestiae quia quos? Amet asperiores, at cumque*/}
        {/*            deserunt eius est explicabo facere harum id impedit ipsa ipsam itaque laudantium libero magni maxime*/}
        {/*            modi neque nesciunt quibusdam quis quisquam reiciendis rem repellendus sint sunt ullam vel velit*/}
        {/*            veritatis voluptatem voluptatum? Cumque laudantium optio qui reiciendis ut, voluptas. Aliquam at*/}
        {/*            beatae delectus ducimus fugiat nobis praesentium quaerat repellendus veritatis vitae! Aliquid*/}
        {/*            asperiores delectus earum libero maiores mollitia nobis numquam provident quaerat sapiente, sed sit*/}
        {/*            soluta voluptatem! Ab adipisci dolores, enim facilis laborum neque perspiciatis possimus*/}
        {/*            repudiandae.*/}
        {/*        </div>*/}

        {/*        <div className="travel_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>*/}
        {/*    </div>*/}


        {/*</div>*/}
        {/*<div className="travel">*/}
        {/*    <div className="travel_content">*/}
        {/*        <div className="travel_subtitle"><span></span>01.12.1234<span></span>*/}
        {/*        </div>*/}
        {/*        <div className="travel_tittle">What level of hiker are you?</div>*/}
        {/*        <div className="travel_picture"><img src={Pic3} alt=""/></div>*/}
        {/*        <div className="travel_description">Determining what level of hiker you are can be an important tool*/}
        {/*            when*/}
        {/*            planning future hikes. This hiking level guide will help you plan hikes according to different hike*/}
        {/*            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –*/}
        {/*            novice, moderate, advanced moderate, expert, or expert backpacker?*/}
        {/*        </div>*/}

        {/*        <div className="travel_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>*/}
        {/*    </div>*/}


        {/*</div>*/}
        {/*<div className="travel">*/}
        {/*    <div className="travel_content">*/}
        {/*        <div className="travel_subtitle"><span/>01.12.1234<span/>*/}
        {/*        </div>*/}
        {/*        <div className="travel_tittle">What level of hiker are you?</div>*/}
        {/*        <div className="travel_picture"><img src={Pic4} alt=""/></div>*/}
        {/*        <div className="travel_description">Determining what level of hiker you are can be an important tool*/}
        {/*            when*/}
        {/*            planning future hikes. This hiking level guide will help you plan hikes according to different hike*/}
        {/*            ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you –*/}
        {/*            novice, moderate, advanced moderate, expert, or expert backpacker?*/}
        {/*        </div>*/}

        {/*        <div className="travel_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>*/}
        {/*    </div>*/}


        {/*</div>*/}


    </div>

}


export default Travel;