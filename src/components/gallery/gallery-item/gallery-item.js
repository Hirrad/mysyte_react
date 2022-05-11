import React from "react";
import {Link} from "react-router-dom";

const GalleryItem =(props)=>{
    const {db,DB}=props;
    console.log(DB)
    // return db.map(({id,nsame,img_gallery,img_tittle}) => {
    //     return <div className="gallery_box " key={id}>
    //         {/*<Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>*/}
    //         <Link to={`/gallery/${id}`}><img src={img_tittle} alt={name}/></Link>
    //         <span>{name}</span>
    //     </div>
    // })
    return DB.data.map((res) => {
        return <div className="gallery_box " key={res.id}>
            {/*<Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>*/}
            <Link to={`/gallery/${res.id}`}><img src={"http://localhost:1337"+res.attributes.background_image.data.attributes.formats.small.url}
             alt={res.attributes.title}/></Link>
            <span>{res.attributes.title}</span>
        </div>
    })
}
export default GalleryItem;