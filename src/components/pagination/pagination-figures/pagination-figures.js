import React, { Fragment } from "react";
import './pagination-figures.scss'
import { sequenceArray,scroll } from "../../../utilis"
import { Link } from 'react-router-dom'

const PaginationFigures = ({ totalCount,
    limit,
    flipping,
    currentPage,
    maxInPage,
    ellipsisSeparator = false,
    separator='...',
    startEndButton = false,
    nextForward = false,
    showingWhenPagesOne=false}) => {
    const endCount = Math.ceil(totalCount / limit)

    const currentArrayPages = (currentPage = 1, endCount) => {
        if (endCount <= 10) {
            return sequenceArray(1, endCount)

        }

        if (endCount > 10) {
            if (currentPage - maxInPage < 0) {
                return sequenceArray(1, maxInPage)
            }
            if (endCount > currentPage + maxInPage) {
                return sequenceArray(currentPage - 1, maxInPage)
            }
            if (currentPage - maxInPage === 0) {
                return sequenceArray(1, maxInPage)
            }
            if (endCount < currentPage + maxInPage - 1) {
                return sequenceArray(endCount - maxInPage + 1, maxInPage)

            }
            if (endCount === currentPage + maxInPage) {
                return sequenceArray(endCount - maxInPage - 1, maxInPage)
            }
            return sequenceArray(currentPage - 1, maxInPage)
        }
        return sequenceArray(endCount - maxInPage + 1, maxInPage)
    }
    const currentCount = currentArrayPages(currentPage, endCount)
    if(!showingWhenPagesOne&&endCount===1) return null
    return (
        <ul className='pagination-figures'>
            {startEndButton &&
                <li className={"pagination-figures-item" + (currentPage === 1 ? ' disabled' : '')}>
                    <Link className="pagination-figures-link" to={''}
                        onClick={() => {flipping(1); scroll()}}
                    >Початок</Link>
                </li>}
            {nextForward && <li className={"pagination-figures-item " + (currentPage === 1 ? ' disabled' : '')}>
                <Link className="pagination-figures-link " to={''}

                    onClick={() => {flipping(currentPage - 1);scroll()}}
                >
                    Попередній
                </Link>
            </li>}
            {currentPage + 1 > maxInPage && ellipsisSeparator &&
                <Fragment>
                    <li className={"pagination-figures-item "}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => {flipping(1);scroll()}}
                        >
                            1
                        </Link>
                    </li>
                    <li className={"pagination-figures-item"}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => {flipping(currentPage - maxInPage-1);scroll()}}
                        >
                            {separator}
                        </Link>
                    </li>
                </Fragment>}
            {currentCount.map(body => (
                <li className='pagination-figures-item' key={body}>
                    <Link to={''}
                        className={'pagination-figures-link ' + (body === currentPage ? ' actived' : '')}
                        onClick={(e) => {flipping(body); scroll()}}
                    >
                        {body}
                    </Link>

                </li>
            ))}
            {currentPage - 2 < endCount - maxInPage && ellipsisSeparator &&
                <Fragment>
                    <li className={"pagination-figures-item"}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => {flipping(currentPage + maxInPage/2);scroll()}}
                        >
                            {separator}
                        </Link>
                    </li>
                    <li className={"pagination-figures-item "}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => {flipping(endCount);scroll()}}
                        >
                            {endCount}
                        </Link>
                    </li>
                </Fragment>}
            {nextForward &&
                <li className={"pagination-figures-item" + (currentPage === endCount ? ' disabled' : '')}>
                    <Link className="pagination-figures-link" to={''}
                        onClick={() => {flipping(currentPage + 1);scroll()}}
                    >Наступний</Link>
                </li>}
            {startEndButton && <li className={"pagination-figures-item" + (currentPage === endCount ? ' disabled' : '')}>
                <Link className="pagination-figures-link" to={''}
                    onClick={() => {flipping(endCount);scroll()}}
                >Кінець</Link>
            </li>}

        </ul>
    )
}
export default PaginationFigures;