import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import './page.scss';
import { withFreedomstoreService } from "../hoc";
import Spinner from "../spinner";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
const Page = (props) => {
    console.log('tut')
    const { id: idParam } = useParams();

    const url = `/blogs/${idParam}`
    const [{ response, isLoading, error }, doFetch] = useFetch(url);
    const [totalCount, setTotalCount] = useState(1)


    const { dataCorrection } = props.freedomstoreService

    useEffect(() => {
        doFetch();
    }, [idParam])
    if (response) {
        console.log(dataCorrection('blog_item',response))
    }

    return <div className="page">
        {isLoading && <Spinner />}
        {(!isLoading && response) &&
            <SRLWrapper>
        <h1 className='mb-3'>{dataCorrection('blog_item',response).title}</h1>
        <div dangerouslySetInnerHTML={{__html:dataCorrection('blog_item',response).textr}}/>
        
       

            </SRLWrapper>
        }

    </div>




}
export default withFreedomstoreService()(Page);