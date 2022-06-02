import React, { useEffect, useState, Fragment} from "react";
import './gallery.scss'
import GalleryItem from "./gallery-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/"
// import PhotoGallery from "./photo-gallery";
import {LoadingBlocks,PaginationFigures} from "../pagination"
const Gallery =(props)=>{
    // console.log('here')
    // const url='/galerries?populate=background_image'
    const [limitPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const url=`/galerries?pagination[page]=${currentPage}&pagination[pageSize]=${limitPage}&populate=*`

    const [{response, isLoading, error}, doFetch]=useFetch(url);
    // const [id, setId] = useState(null);
    // const   [galleryItem, setGalleryItem] = useState(null);

    const [bd, setBd] = useState([])

    // const [currentBd, setCurrentBd] = useState([])
    const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)
    // const [totalCount, setTotalCount] = useState(1)

    const flipping = (page, loadingBlocks = false) => {
        // console.log(e)
        setCurrentPage(page<=0?-(page)+1:page)
        setLoadingBlocksTrueFalse(loadingBlocks)
    }
    console.log(response)
//    const {id:idParam}=useParams();
const{dataCorrection}= props.freedomstoreService
    useEffect(() => {
        doFetch();
        // let cancelled = false;
        // !cancelled && doFetch();;

        // return () => cancelled = true;

    }, [doFetch,currentPage])
    if(response){
        
    }
    // console.log(currentBd)
    useEffect(() => {
        if (!response) return
        setBd(dataCorrection('gallery_small',response))
        // setCurrentBd(dataCorrection('gallery_images', response).data.slice(firstPage, lastPages))
    }, [response, currentPage,dataCorrection])

//     useEffect(() => {
//         if (bd.length === 0) return
//         const lastPages = currentPage * limitPage
//         // if(!loadingBlocksTrueFalse){
//         //     const firstPage = lastPages - limitPage
//         // }
// console.log('tut')
//         const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)

//         setCurrentBd(bd.data.slice(firstPage, lastPages))

//     }, [currentPage, bd])


    return <Fragment>
    
        <div className="gallery">
        {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
        {isLoading && <Spinner/>}
        {(!isLoading && bd.length!==0) && <GalleryItem db={bd} />}

        {/* {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>} */}
    </div>
    {/* {(!isLoading && response) && <LoadingBlocks
            totalCount={response.meta.pagination.total}
            limit={limitPage}
            flipping={flipping} />} */}
            {(!isLoading && response) && <PaginationFigures
        totalCount={response.meta.pagination.total}
        limit={limitPage}
        flipping={flipping}
        currentPage={currentPage} 
        maxInPage={10}
        ellipsisSeparator={true}
        separator='...'
        startEndButton={false}
        nextForward={false}
        showingWhenPagesOne={false}
        
        />}
    </Fragment>
}

export default withFreedomstoreService()(Gallery);
// export default Gallery;
