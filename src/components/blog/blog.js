import React, {useState, useEffect,Fragment} from "react";

import './blog.scss'
import BlogItem from "./blog-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
import { useFetch } from "../../hooks";
import { PaginationFigures,LoadingBlocks } from "../pagination";

const Blog = (props) => {
const { id: idParam } = useParams();
const [currentPage, setCurrentPage] = useState(1)
const [limitPage] = useState(10)
// const url = `/blogs?populate=background_image`
const url=`/blogs?pagination[page]=${currentPage}&pagination[pageSize]=${limitPage}&populate=background_image`

const [{ response, isLoading, error }, doFetch] = useFetch(url);
const [totalCount, setTotalCount] = useState(1)
const [bd, setBd] = useState([])
// const [currentBd, setCurrentBd] = useState([])
const { dataCorrection } = props.freedomstoreService

useEffect(() => {
    doFetch();
}, [idParam,doFetch,currentPage])

useEffect(() => {
    if (!response) return
    
    setBd(dataCorrection('blog', response))
    setTotalCount(dataCorrection('blog', response).data.length)
}, [response,dataCorrection])

////// start Paginator

const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)

const flipping = (page, loadingBlocks = false) => {
    // console.log(e)
    setCurrentPage(page<=0?-(page)+1:page)
    setLoadingBlocksTrueFalse(loadingBlocks)
}


// useEffect(() => {
//     // console.log(bd)
//     if (bd.length === 0) return
//     const lastPages = currentPage * limitPage
//     const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)
//     setCurrentBd(bd.data.slice(firstPage, lastPages))
// }, [currentPage, bd,limitPage,loadingBlocksTrueFalse])
/////End Paginator




return <Fragment>
    
<div className="wrapper_blog">
        {isLoading && <Spinner/>}
        {(!isLoading && bd.length!==0) && <BlogItem bd={bd}/>}

        {/* {!!id && !!blogItem && <Page data={blogItem}/>} */}
    </div>

    {(!isLoading && response) && <LoadingBlocks
        totalCount={totalCount}
        limit={limitPage}
        flipping={flipping}
        
        
         />}
         {(!isLoading && response) && <PaginationFigures
        totalCount={response.meta.pagination.total}
        limit={limitPage}
        flipping={flipping}
        currentPage={currentPage} 
        maxInPage={10}
        ellipsisSeparator={true}
        startEndButton={false}
        nextForward={false}
        />}
</Fragment>
    




}

export default withFreedomstoreService()(Blog);