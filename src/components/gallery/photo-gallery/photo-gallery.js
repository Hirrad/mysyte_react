import React, { useEffect, useState} from "react";
import './photo-gallery.scss'
import LazyLoad from 'react-lazyload';
import {SRLWrapper} from "simple-react-lightbox";

import {withFreedomstoreService} from "../../hoc";
import Spinner from "../../spinner";
import {useParams} from "react-router-dom";
import {useFetch} from "../../../hooks/"

// import LazyLoad from 'react-lazyload';

const GalleryPhoto =(props)=>{
    // console.log('here')
    const {id:idParam}=useParams();
    // const url=`/galerries/${idParam}?populate=images`
    const url=`/galerries/${idParam}?populate=*`
    const [{response, isLoading, error}, doFetch]=useFetch(url);
    const [id, setId] = useState(null);
    
   
const{dataCorrection}= props.freedomstoreService
    useEffect(() => {
        doFetch();
        let cancelled = false;        
        const id = +idParam
        !cancelled && setId(id);

        return () => cancelled = true;

    }, [idParam])
    if(response){
        // console.log(response)
    }
    return <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {isLoading && <Spinner/>}
        {(!isLoading && response) && <GalleryPhotoItems db={dataCorrection('gallery_images',response)} />}

        {/* {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>} */}
    </div>
}

export default withFreedomstoreService()(GalleryPhoto);
// export default Gallery;








// import React  from "react";


const GalleryPhotoItems = ({db}) => {
    console.log(db)
    return <SRLWrapper>
        <div className="photos_wrapper">
            <LazyLoad height={100}>
                {db.data.map((body) => {
                    if(!body.video){
                        return <div className="photos_img" key={body.id}>
                        <img src={body.url} alt={body.alt}/>
                    </div>
                    }
                    return <video
                              width="100%"
          height="100%"
          key={body.id}
                    >
                    <source src={body.url} type="video/mp4" />
                    </video>
                    
                })}
            </LazyLoad>
        </div>
    </SRLWrapper>

}

