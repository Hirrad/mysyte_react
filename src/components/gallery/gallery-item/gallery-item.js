import React from "react";
import {Link} from "react-router-dom";

const GalleryItem =(props)=>{
    const {galBD}=props;
    return galBD.map(({id,name,img_gallery,img_tittle}) => {
        return <div className="gallery_box " key={id}>
            {/*<Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>*/}
            <Link to={`/photo/${id}`}><img src={img_tittle} alt={name}/></Link>
            <span>{name}</span>
        </div>
    })
}
export default GalleryItem;