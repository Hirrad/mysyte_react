import React, {useState, useEffect,Fragment} from "react";

import './blog.scss'
import BlogItem from "./blog-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {useParams} from "react-router-dom";
import { useFetch } from "../../hooks";
import {Page} from "../pages";
import { PaginationFigures,LoadingBlocks } from "../pagination";
const Blog = (props) => {
console.log('tut')
const { id: idParam } = useParams();

const url = `/on-a-hikes?populate=background_image`
const [{ response, isLoading, error }, doFetch] = useFetch(url);
const [totalCount, setTotalCount] = useState(1)
const [bd, setBd] = useState([])
const [limitPage] = useState(5)
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
}, [idParam])

useEffect(() => {
    if (!response) return
    
    setBd(dataCorrection('blog', response))
    setTotalCount(dataCorrection('blog', response).data.length)
}, [response])

useEffect(() => {
    console.log(bd)
    if (bd.length === 0) return
    const lastPages = currentPage * limitPage
    const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)
    setCurrentBd(bd.data.slice(firstPage, lastPages))
}, [currentPage, bd])

return <Fragment>
<div className="wrapper_blog">
        {isLoading && <Spinner/>}
        {(!isLoading && currentBd.length!==0) && <BlogItem bd={currentBd}/>}

        {/* {!!id && !!blogItem && <Page data={blogItem}/>} */}
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

export default withFreedomstoreService()(Blog);