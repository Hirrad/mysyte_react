import React, { useEffect, useState, Fragment } from "react";
import './photo-gallery.scss'
import LazyLoad from 'react-lazyload';
import { SRLWrapper } from "simple-react-lightbox";
import { LoadingBlocks, PaginationFigures } from "../../pagination";
import { withFreedomstoreService } from "../../hoc";
import Spinner from "../../spinner";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/"

// import LazyLoad from 'react-lazyload';

const GalleryPhoto = (props) => {
    // console.log('here')
    const { id: idParam } = useParams();
    const url = `/galerries/${idParam}?populate=images`
    const [{ response, isLoading }, doFetch] = useFetch(url);
    // const [id, setId] = useState(null);
    const [totalCount, setTotalCount] = useState(1)
    const [bd, setBd] = useState([])
    const [limitPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentBd, setCurrentBd] = useState([])
    const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)

    const { dataCorrection,optionsSRLWrapper } = props.freedomstoreService
    const flipping = (page, loadingBlocks = false) => {
        setCurrentPage(page)
        setLoadingBlocksTrueFalse(loadingBlocks)
    }
    useEffect(() => {
        doFetch();
    }, [idParam,doFetch])

    useEffect(() => {
        if (!response) return
        setBd(dataCorrection('gallery_images', response))
        setTotalCount(dataCorrection('gallery_images', response).data.length)
    }, [response,dataCorrection])

    useEffect(() => {
        if (bd.length === 0) return
        const lastPages = currentPage * limitPage
        const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)
        setCurrentBd(bd.data.slice(firstPage, lastPages))
    }, [currentPage, bd,limitPage,loadingBlocksTrueFalse])

    return <Fragment>
        <div className="gallery">
            {isLoading && (currentBd.length === 0) && <Spinner />}
            {(!isLoading) && <GalleryPhotoItems db={currentBd} optionsSRLWrapper={optionsSRLWrapper}/>}

        </div>
        {(!isLoading && response) && <PaginationFigures
        limit={limitPage}
        flipping={flipping}
        currentPage={currentPage} 
        maxInPage={10}
        ellipsisSeparator={true}
        separator='...'
        startEndButton={false}
        nextForward={true}
        showingWhenPagesOne={false}

            totalCount={totalCount}
 />}
    </Fragment>
}

export default withFreedomstoreService()(GalleryPhoto);
// export default Gallery;


// import React  from "react";


const GalleryPhotoItems = ({ db, optionsSRLWrapper}) => {
    console.log(optionsSRLWrapper)
    console.log(db)
    return <SRLWrapper
    options={optionsSRLWrapper}>
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

