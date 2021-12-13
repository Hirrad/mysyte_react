import React from "react";

import './photo-gallery.scss'


import {SRLWrapper} from "simple-react-lightbox";


const PhotoGallery = (props) => {
    const {img_gallery} = props.location.state
    return <div className="photos">
        <SRLWrapper>
            <div className="photos_wrapper">
                {console.log(img_gallery)}
                {img_gallery.map((body)=>{
                 return   <div className="photos_img">

                        <img src={body} alt=""/>

                    </div>
                })}
            </div>
        </SRLWrapper>
    </div>


}

export default PhotoGallery;
