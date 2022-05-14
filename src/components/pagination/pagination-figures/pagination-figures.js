import React from "react";
import './pagination-figures.scss'
import {sequenceArray} from "../../../utilis"
import {NavLink,Link} from 'react-router-dom'
// import Link from "react-scroll/modules/components/Link";
const PaginationFigures=({totalCount, limit,flipping})=>{
    const endCount=Math.ceil(totalCount/limit)
    const currentCount=sequenceArray(1,endCount);

    return(
        <ul className='pagination flex flex-wrap mt-3 p'>
             {currentCount.map(body=>(
                <li className='age-item m-1'  key={body}>
        <Link to={''} className='page-link' onClick={() => flipping(body)}>
            {body}
        </Link>

    </li>
            ))}

        </ul>
    )
}
export default PaginationFigures;