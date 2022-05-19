import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './page.scss';
import { withFreedomstoreService } from "../hoc";
import Spinner from "../spinner";
import { useParams,useLocation } from "react-router-dom";
import { useFetch } from "../../hooks";
import { switchFetch } from "../../utilis";
const Page = (props) => {
    
    // console.log(useLocation().pathname.replaceAll(/[^A-Za-z]/g,""))
    const { id: idParam } = useParams();
const {pathname}=useLocation();
// console.log(switchFetch(pathname,idParam))
    // const url = `/blogs/${idParam}`
    const url=switchFetch(pathname,idParam);
    const [{ response, isLoading, error }, doFetch] = useFetch(url);
    const [totalCount, setTotalCount] = useState(1)


    const { dataCorrection } = props.freedomstoreService

    useEffect(() => {
        doFetch();
    }, [idParam])
    if (response) {
        // console.log(dataCorrection('blog_item',response))
    }

    return <div className="page">
        {isLoading && <Spinner />}
        {(!isLoading && response) &&
            <SRLWrapper>
        {/* <h1 className='mb-3'>{dataCorrection('blog_item',response).title}</h1> */}
        <div dangerouslySetInnerHTML={{__html:dataCorrection('blog_item',response).text}}/>
        
       

            </SRLWrapper>
        }

    </div>




}
export default withFreedomstoreService()(Page);