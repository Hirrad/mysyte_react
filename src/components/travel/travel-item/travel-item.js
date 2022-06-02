import React from "react";
import './trevel-item.scss';
import ItemFooter from "../../item-footer";
import Moment from 'react-moment';
// import {FaLongArrowAltRight} from "../../buttons/font-awesome";

const TravelItem = ({bd}) => {
   
    return bd.data.map((body) => {
        const {url, title, description,id} = body;
        // const {data, tittle, picture, description, text} = body;
        return <div className="travel" key={id}>
            <div className="travel_content" >
                <div className="travel_subtitle"><span></span>
            <span>
            <Moment date={body.date} format="YYYY.MM.DD"/>
            </span>    
                <span></span>
                </div>
                <div className="travel_tittle">{title}</div>
                <div className="travel_picture"><img src={url} alt=""/></div>
                <div className="travel_description">{description}
                </div>
{/*<ItemFooter/>*/}
                <ItemFooter id={id} styleTeg="travel_footer" section='travel'/>
                {/*<div className="travel_footer"><a href="page.html">read more </a><FaLongArrowAltRight/></div>*/}
            </div>
        </div>

    })
}

export default TravelItem;
// import Moment from 'react-moment';

//         <Moment date={date} format="YYYY-MM-DD HH:mm">
               
//             </Moment>