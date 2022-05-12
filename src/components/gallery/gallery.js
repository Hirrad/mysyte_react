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
    const [{response, isLoading, error}, doFetch]=useFetch(url)
    const [id, setId] = useState(null),
        // [loading,setLoading]=useState(true),
        [galleryDb, setGalleryDb] = useState({
            Db: null,
            loading: true
        }),
        [galleryItem, setGalleryItem] = useState(null)
const {id:idParam}=useParams();
const{dataCorrection}= props.freedomstoreService
    useEffect(() => {
        doFetch();
        let cancelled = false;
        // const {getGalleryBd, getGalleryItem} = props.freedomstoreService
        
        const id = +idParam


        // console.log(getGalleryBd())
        // console.log(galleryDb)
        // const res = getGalleryBd();
        // !cancelled && setGalleryDb({
        //     Db: res,
        //     loading: false
        // });
        // console.log(galleryDb)
        !cancelled && setId(id);
        // console.log(`in id or not ${galleryDb.loading}`)
        // if (!!id) {
        //     // console.log(`into id ${getGalleryItem}`)
        //     const item = getGalleryItem(+id);
        //     setGalleryItem(item)
        // }
        return () => cancelled = true;

    }, [idParam])
    if(response){
        console.log()
    }
    return <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {isLoading && <Spinner/>}
        {(!isLoading && response) && <GalleryItem db={dataCorrection('gallery_small',response)} />}

        {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>}
    </div>
}

export default withFreedomstoreService()(Gallery);
// export default Gallery;
