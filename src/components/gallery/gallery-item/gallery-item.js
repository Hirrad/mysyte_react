import React from "react";
import {Link} from "react-router-dom";
import './gallery-item.scss'

const GalleryItem =(props)=>{
    const {db}=props;
    console.log(db)
    // return db.map(({id,nsame,img_gallery,img_tittle}) => {
    //     return <div className="gallery_box " key={id}>
    //         {/*<Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>*/}
    //         <Link to={`/gallery/${id}`}><img src={img_tittle} alt={name}/></Link>
    //         <span>{name}</span>
    //     </div>
    // })
    return db.data.map((res) => {
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