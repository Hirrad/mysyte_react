import React, { useEffect, useState, Fragment} from "react";
import './gallery.scss'
import GalleryItem from "./gallery-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/"
import PhotoGallery from "./photo-gallery";
import {LoadingBlocks} from "../pagination"
const Gallery =(props)=>{
    // console.log('here')
    const url='/galerries?populate=background_image'
    const [{response, isLoading, error}, doFetch]=useFetch(url);
    // const [id, setId] = useState(null);
    const   [galleryItem, setGalleryItem] = useState(null);

    const [bd, setBd] = useState([])
    const [limitPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentBd, setCurrentBd] = useState([])
    const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)
    const [totalCount, setTotalCount] = useState(1)

    const flipping = (page, loadingBlocks = false) => {
        setCurrentPage(page)
        setLoadingBlocksTrueFalse(loadingBlocks)
    }
    
   const {id:idParam}=useParams();
const{dataCorrection}= props.freedomstoreService
    useEffect(() => {
        doFetch();
        // let cancelled = false;        
        // const id = +idParam
        // !cancelled && setId(id);

        // return () => cancelled = true;

    }, [idParam])
    if(response){
        
    }
    console.log(currentBd)
    useEffect(() => {
        if (!response) return
        setBd(dataCorrection('gallery_small',response))
        // setCurrentBd(dataCorrection('gallery_images', response).data.slice(firstPage, lastPages))
    }, [response, currentPage])

    useEffect(() => {
        if (bd.length === 0) return
        const lastPages = currentPage * limitPage
        // if(!loadingBlocksTrueFalse){
        //     const firstPage = lastPages - limitPage
        // }
console.log('tut')
        const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)

        setCurrentBd(bd.data.slice(firstPage, lastPages))

    }, [currentPage, bd])


    return <Fragment>
        <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {isLoading && <Spinner/>}
        {(!isLoading && currentBd.length!==0) && <GalleryItem db={currentBd} />}

        {/* {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>} */}
    </div>
    {(!isLoading && response) && <LoadingBlocks
            totalCount={response.meta.pagination.total}
            limit={10}
            flipping={flipping} />}
    </Fragment>
}

export default withFreedomstoreService()(Gallery);
// export default Gallery;
