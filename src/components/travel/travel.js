import React, {useEffect, useState} from "react";
import './travel.scss'
import TravelItem from "./travel-item";
import {Page} from "../pages";
import Spinner from "../spinner";
import {withRouter} from "react-router-dom";
import {withFreedomstoreService} from "../hoc";

const Travel = (props) => {

    const [id, setId] = useState(null),
        // [loading,setLoading]=useState(true),
        [travelDb, setTravelDb] = useState({
            Db: null,
            loading: true
        }),
        [treverItem, setTreverItem] = useState(null)

    useEffect(() => {
        let cancelled = false;
        const {getTravelBd, getTravelItem} = props.freedomstoreService
        const id = +props.match.params.id


        console.log(getTravelBd())
        console.log(travelDb)
        const res = getTravelBd();
        !cancelled && setTravelDb({
            Db: res,
            loading: false
        });
        console.log(travelDb)
        !cancelled && setId(id);
        console.log(`in id or not ${travelDb.loading}`)
        if (!!id) {

            const item = getTravelItem(+id);
            setTreverItem(item)
        }
        return () => cancelled = true;

    }, [props.match.params.id])


    return <div className="wrapper_travel">

        {console.log(`id ${typeof (id)}, blogDb ${travelDb.loading} props.match.params ${props.match.params.id} blogItem ${treverItem}`)}
        {travelDb.loading && <Spinner/>}
        {(!travelDb.loading && !id) && <TravelItem dataTravel={travelDb.Db}/>}

        {(!!id && !!treverItem) && <Page data={treverItem}/>}
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


export default withRouter(withFreedomstoreService()(Travel));