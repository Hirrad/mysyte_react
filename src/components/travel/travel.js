import React, {useState, useEffect,Fragment} from "react";

import './travel.scss'
import TravelItem from "./travel-item"
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
// import {useParams} from "react-router-dom";
import { useFetch } from "../../hooks";
// import {Page} from "../pages";
import { PaginationFigures,LoadingBlocks } from "../pagination";
const Travel = (props) => {
// const { id: idParam } = useParams();
const [limitPage] = useState(5)
const [currentPage, setCurrentPage] = useState(1)
const url = `/on-a-hikes?pagination[page]=${currentPage}&pagination[pageSize]=${limitPage}&populate=background_image`
// const url=`/galerries?pagination[page]=${currentPage}&pagination[pageSize]=${limitPage}&populate=*`

const [{ response, isLoading, error }, doFetch] = useFetch(url);
// const [totalCount, setTotalCount] = useState(1)
const [bd, setBd] = useState([])

// const [currentBd, setCurrentBd] = useState([])
const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)

const { dataCorrection } = props.freedomstoreService
const flipping = (page, loadingBlocks = false) => {
    setCurrentPage(page)
    setLoadingBlocksTrueFalse(loadingBlocks)
}
useEffect(() => {
    doFetch();
}, [currentPage,doFetch])

useEffect(() => {
    if (!response) return
    setBd(dataCorrection('blog', response))
    // setTotalCount(dataCorrection('blog', response).data.length)
}, [response])

// useEffect(() => {
//     // console.log(bd)
//     if (bd.length === 0) return
//     const lastPages = currentPage * limitPage
//     const firstPage = loadingBlocksTrueFalse ? 0 : (lastPages - limitPage)
//     setCurrentBd(bd.data.slice(firstPage, lastPages))
// }, [currentPage, bd])

return <Fragment>

<div className="wrapper_travel">
        {isLoading && <Spinner/>}
        {(!isLoading && bd.length!==0) && <TravelItem bd={bd}/>}
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
    {/* {(!isLoading && response) && <LoadingBlocks
        totalCount={totalCount}
        limit={limitPage}
        flipping={flipping} />} */}
            

    </div>

    
</Fragment>
    




}

export default withFreedomstoreService()(Travel);





// const Travel = (props) => {

//     const [id, setId] = useState(null),
//         // [loading,setLoading]=useState(true),
//         [travelDb, setTravelDb] = useState({
//             Db: null,
//             loading: true
//         }),
//         [treverItem, setTreverItem] = useState(null)
//         const {id:idParam}=useParams();
//     useEffect(() => {
//         let cancelled = false;
//         const {getTravelBd, getTravelItem} = props.freedomstoreService
//         const id = +idParam


//         console.log(getTravelBd())
//         console.log(travelDb)
//         const res = getTravelBd();
//         !cancelled && setTravelDb({
//             Db: res,
//             loading: false
//         });
//         console.log(travelDb)
//         !cancelled && setId(id);
//         console.log(`in id or not ${travelDb.loading}`)
//         if (!!id) {

//             const item = getTravelItem(+id);
//             setTreverItem(item)
//         }
//         return () => cancelled = true;

//     }, [idParam,props.freedomstoreService,travelDb])


//     return <div className="wrapper_travel">
//         {travelDb.loading && <Spinner/>}
//         {(!travelDb.loading && !id) && <TravelItem dataTravel={travelDb.Db}/>}

            

//     </div>

// }