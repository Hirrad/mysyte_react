import React from "react";

import './photo-gallery.scss'
import Pic1 from '../../img/_DSC0245.JPG';
import Pic2 from '../../img/_DSC0008.JPG'
import Pic3 from '../../img/_DSC0083.JPG'
import Pic4 from '../../img/_DSC0084.JPG'
import Pic5 from '../../img/_DSC0086.JPG'
import Pic6 from '../../img/_DSC0087.JPG'
import Pic7 from '../../img/_DSC0088.JPG'
import Pic8 from '../../img/_DSC0089.JPG'
import Pic9 from '../../img/_DSC0090.JPG'
import Pic10 from '../../img/_DSC0091.JPG'
import Pic11 from '../../img/_DSC0092.JPG'
import Pic12 from '../../img/_DSC0093.JPG'
import Pic13 from '../../img/_DSC0094.JPG'
import Pic14 from '../../img/_DSC0095.JPG'
import Pic15 from '../../img/_DSC0096.JPG'
import Pic16 from '../../img/_DSC0245.JPG'

import {SRLWrapper} from "simple-react-lightbox";



const  PhotoGallery=()=>{
 return    <div className="photos">
     <SRLWrapper>
     <div className="photos_wrapper">
         <div className="photos_img">
             <a href={Pic1}>
                 <img src={Pic1} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic1}>
                 <img src={Pic1} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic2}>
                 <img src={Pic2} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic3}>
                 <img src={Pic3} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic4}>
                 <img src={Pic4} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic5}>
                 <img src={Pic5} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic6}>
                 <img src={Pic6} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic7}>
                 <img src={Pic7} alt="" />
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic8}>
                 <img src={Pic8} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic9}>
                 <img src={Pic9} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic10}>
                 <img src={Pic10} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic11}>
                 <img src={Pic11} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic12}>
                 <img src={Pic12} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic13}>
                 <img src={Pic13} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic14}>
                 <img src={Pic14} alt=""/>
             </a>
         </div>
         <div className="photos_img">
             <a data-fslightbox href={Pic15}>
                 <img src={Pic15} alt=""/>
             </a>
         </div>

     </div>
         </SRLWrapper>
 </div>


}

export default PhotoGallery;
