import React from "react";
import './gallery.scss'
import Pic1 from '../img/_DSC0085.JPG'
import Pic2 from '../img/_DSC0039.JPG'
import Pic3 from '../img/_DSC0080.JPG'
import Pic4 from '../img/_DSC0129.JPG'
import Pic5 from '../img/_DSC0143.JPG'
import Pic6 from '../img/_DSC0010.JPG'
import Pic7 from '../img/_DSC0011.JPG'
import Pic8 from '../img/_DSC0012.JPG'
import Pic9 from '../img/_DSC0013.JPG'
import Pic10 from '../img/_DSC0014.JPG'
import Pic11 from '../img/_DSC0015.JPG'
import Pic12 from '../img/_DSC0011.JPG'
import Pic13 from '../img/_DSC0245.JPG';
import Pic14 from '../img/_DSC0008.JPG'
import Pic15 from '../img/_DSC0083.JPG'
import Pic16 from '../img/_DSC0084.JPG'
import Pic17 from '../img/_DSC0086.JPG'
import Pic18 from '../img/_DSC0087.JPG'
import Pic19 from '../img/_DSC0088.JPG'
import Pic20 from '../img/_DSC0089.JPG'
import Pic21 from '../img/_DSC0090.JPG'
import Pic22 from '../img/_DSC0091.JPG'
import Pic23 from '../img/_DSC0092.JPG'
import Pic24 from '../img/_DSC0093.JPG'
import Pic28 from '../img/_DSC0245.JPG'
import GalleryItem from "./gallery-item";


const galBD = [{
    id: 1,
    name: 'Полонына руна',
    img_tittle: Pic1,
    img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
},
    {
        id: 2,
        name: 'Полонына руна2',
        img_tittle: Pic2,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic17, Pic18, Pic19, Pic20, Pic21, Pic22, Pic23, Pic24,Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic17, Pic18, Pic19, Pic20, Pic21, Pic22, Pic23, Pic24]
    }, {
        id: 3,
        name: 'Полонына руна3',
        img_tittle: Pic3,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12,Pic13, Pic14, Pic15, Pic16, Pic28]
    },
    {
        id: 4,
        name: 'Полонына руна4',
        img_tittle: Pic4,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 5,
        name: 'Полонына руна5',
        img_tittle: Pic5,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 6,
        name: 'Полонына руна6',
        img_tittle: Pic6,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 7,
        name: 'Полонына руна7',
        img_tittle: Pic7,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 8,
        name: 'Полонына руна8',
        img_tittle: Pic8,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 9,
        name: 'Полонына руна9',
        img_tittle: Pic9,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 10,
        name: 'Полонына руна10',
        img_tittle: Pic10,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 11,
        name: 'Полонына руна11',
        img_tittle: Pic11,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    },
    {
        id: 12,
        name: 'Полонына рунаdfdsfs',
        img_tittle: Pic12,
        img_gallery: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11, Pic12]
    }
];

const Gallery = () => {

    return (
        <div className="gallery">
            <GalleryItem galBD={galBD}/>
        </div>
    )


}
// const GalleryItem =(props)=>{
//     const {galBD}=props;
//     return galBD.map(({id,name,img_gallery,img_tittle}) => {
//         return <div className="gallery_box " key={id}>
//             <Link to={{ pathname: '/photo', state: { img_gallery: img_gallery} }}><img src={img_tittle} alt={name}/></Link>
//             <span>{name}</span>
//         </div>
//     })
// }
// <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link>
export default Gallery;