import React from "react";
import {Link} from "react-router-dom";
import './gallery-item.scss'

const GalleryItem =({db})=>{
    
    return db.map((res) => {
        return <div className="gallery_box " key={res.id}>
            {/*<Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>*/}
            <Link to={`/gallery/${res.id}`}>
            <img src={res.url}
             alt={res.title}/></Link>
            <span>{res.title}</span>
        </div>
    })
}
export default GalleryItem;