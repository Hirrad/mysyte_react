import React from "react";
import './trevel-item.scss';
import ItemFooter from "../../item-footer";
// import {FaLongArrowAltRight} from "../../buttons/font-awesome";

const TravelItem = (props) => {
    const {dataTravel} = props;
    return dataTravel.map((body, index) => {
        const {data, tittle, picture, description,id} = body;
        // const {data, tittle, picture, description, text} = body;
        return <div className="travel" key={index}>
            <div className="travel_content" >
                <div className="travel_subtitle"><span></span>{data}<span></span>
                </div>
                <div className="travel_tittle">{tittle}</div>
                <div className="travel_picture"><img src={picture} alt=""/></div>
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
