import React, { useEffect, useState} from "react";
import './gallery.scss'
import GalleryItem from "./gallery-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/"
import PhotoGallery from "./photo-gallery";

const Gallery =(props)=>{
    // console.log('here')
    const url='/galerries?populate=background_image'
    const [{response, isLoading, error}, doFetch]=useFetch(url);
    const [id, setId] = useState(null);
    const   [galleryItem, setGalleryItem] = useState(null);
   const {id:idParam}=useParams();
const{dataCorrection}= props.freedomstoreService
    useEffect(() => {
        doFetch();
        let cancelled = false;        
        const id = +idParam
        !cancelled && setId(id);

        return () => cancelled = true;

    }, [idParam])
    if(response){
        console.log(response)
    }
    return <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {isLoading && <Spinner/>}
        {(!isLoading && response) && <GalleryItem db={dataCorrection('gallery_small',response)} />}

        {/* {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>} */}
    </div>
}

export default withFreedomstoreService()(Gallery);
// export default Gallery;
