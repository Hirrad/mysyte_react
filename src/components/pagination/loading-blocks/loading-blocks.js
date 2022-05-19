import React, { useEffect,useState} from "react";
import './loading-blocks'
import { sequenceArray } from "../../../utilis"
import { NavLink, Link } from 'react-router-dom'
const LoadingBlocks = ({ totalCount, limit, flipping }) => {
    const[page,setPage]=useState(2)
    const endCount = Math.ceil(totalCount / limit)
    const currentCount = sequenceArray(1, endCount).length;
//  useEffect(() => {
//      if(page>currentCount) setPage(1)
//  },[page])
//  console.log('foo')
    return (
        
        (page>currentCount||currentCount===1)?null:<div className='flex flex-wrap mt-3' >
            <button type="button" 
            className="btn btn-outline-success"
            onClick={() =>{
                flipping(page,true)
                setPage(page+1)
                }} >
            Success
            </button>

        </div>
    )
}
export default LoadingBlocks;