import React, { useEffect, useState, Fragment } from "react";
import './photo-gallery.scss'
import LazyLoad from 'react-lazyload';
import { SRLWrapper } from "simple-react-lightbox";
import { LoadingBlocks, PaginationFigures } from "../../pagination";
import { withFreedomstoreService } from "../../hoc";
import Spinner from "../../spinner";
import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../../../hooks/"

// import LazyLoad from 'react-lazyload';

const GalleryPhoto = (props) => {
    // console.log('here')
    const { id: idParam } = useParams();

    // const url=`/galerries/${idParam}?populate=images`
    const url = `/galerries/${idParam}?populate=images`
    const [{ response, isLoading, error }, doFetch] = useFetch(url);
    // const [id, setId] = useState(null);
    const [totalCount, setTotalCount] = useState(1)
    const [bd, setBd] = useState([])
    const [limitPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentBd, setCurrentBd] = useState([])
    const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)

    const { dataCorrection } = props.freedomstoreService
    const flipping = (page, loadingBlocks = false) => {
        setCurrentPage(page)
        setLoadingBlocksTrueFalse(loadingBlocks)
    }
    useEffect(() => {
        doFetch();
        // let cancelled = false;        
        // const id = +idParam
        // !cancelled && setId(id);

        // return () => cancelled = true;

    }, [idParam])

    useEffect(() => {
        if (!response) return
        setBd(dataCorrection('gallery_images', response))
        setTotalCount(dataCorrection('gallery_images', response).data.length)
        // setCurrentBd(dataCorrection('gallery_images', response).data.slice(firstPage, lastPages))
    }, [response, currentPage])

    useEffect(() => {
        if (bd.length === 0) return
        const lastPages = currentPage * limitPage
        // if(!loadingBlocksTrueFalse){
        //     const firstPage = lastPages - limitPage
        // }

        const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)

        setCurrentBd(bd.data.slice(firstPage, lastPages))

    }, [currentPage, bd])

    return <Fragment>
        <div className="gallery">
            {/* {console.log(`id ${typeof (id)}, blogDb ${galleryDb.loading} props.match.params ${props.match.params.id} blogItem ${galleryItem}`)} */}
            {isLoading && (currentBd.length === 0) && <Spinner />}
            {(!isLoading) && <GalleryPhotoItems db={currentBd} />}

            {/* {!!id && !!galleryItem && <PhotoGallery data={galleryItem}/>} */}
        </div>
        {(!isLoading && response) && <PaginationFigures
            totalCount={totalCount}
            limit={limitPage}
            flipping={flipping} />}
        {(!isLoading && response) && <LoadingBlocks
            totalCount={totalCount}
            limit={limitPage}
            flipping={flipping} />}
    </Fragment>
}

export default withFreedomstoreService()(GalleryPhoto);
// export default Gallery;








// import React  from "react";


const GalleryPhotoItems = ({ db }) => {
    console.log(db)
    return <SRLWrapper>
        <div className="photos_wrapper">
            <LazyLoad height={100}>
                {db.map((body) => {
                    return <div className="photos_img" key={body.id}>
                        <img src={body.url} alt={body.alt} />
                    </div>


                })}

            </LazyLoad>
        </div>
    </SRLWrapper>

}

