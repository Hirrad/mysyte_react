import React, { Fragment } from "react";
import './pagination-figures.scss'
import { sequenceArray } from "../../../utilis"
import { Link } from 'react-router-dom'
const PaginationFigures = ({ totalCount,
    limit,
    flipping,
    currentPage,
    maxInPage,
    ellipsisSeparator = false,
    startEndButton = false,
    nextForward = false }) => {
    const endCount = Math.ceil(totalCount / limit)

    const currentArrayPages = (currentPage = 1, endCount) => {
        if (endCount <= 10) {
            console.log('endCount<=10')
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

        if (currentPage - maxInPage === 0) {
            return sequenceArray(1, maxInPage)
        }
        return sequenceArray(endCount - maxInPage + 1, maxInPage)
    }
    const currentCount = currentArrayPages(currentPage, endCount)
    return (
        <ul className='pagination-figures'>
            {startEndButton &&
                <li className={"pagination-figures-item" + (currentPage === 1 ? ' disabled' : '')}>
                    <Link className="pagination-figures-link" to={''}
                        onClick={() => flipping(1)}
                    >Початок</Link>
                </li>}
            {nextForward && <li className={"pagination-figures-item " + (currentPage === 1 ? ' disabled' : '')}>
                <Link className="pagination-figures-link " to={''}

                    onClick={() => flipping(currentPage - 1)}
                >
                    Попередній
                </Link>
            </li>}
            {currentPage + 1 > maxInPage && ellipsisSeparator &&
                <Fragment>
                    <li className={"pagination-figures-item "}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => flipping(1)}
                        >
                            1
                        </Link>
                    </li>
                    <li className={"pagination-figures-item"}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => flipping(currentPage - maxInPage)}
                        >
                            ...
                        </Link>
                    </li>
                </Fragment>}
            {currentCount.map(body => (
                <li className='pagination-figures-item' key={body}>
                    <Link to={''}
                        className={'pagination-figures-link ' + (body === currentPage ? ' actived' : '')}
                        onClick={(e) => flipping(body)}
                    >
                        {body}
                    </Link>

                </li>
            ))}
            {currentPage - 2 < endCount - maxInPage && ellipsisSeparator &&
                <Fragment>
                    <li className={"pagination-figures-item"}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => flipping(currentPage + maxInPage)}
                        >
                            ...
                        </Link>
                    </li>
                    <li className={"pagination-figures-item "}>
                        <Link className="pagination-figures-link " to={''}

                            onClick={() => flipping(endCount)}
                        >
                            {endCount}
                        </Link>
                    </li>
                </Fragment>}
            {nextForward &&
                <li className={"pagination-figures-item" + (currentPage === endCount ? ' disabled' : '')}>
                    <Link className="pagination-figures-link" to={''}
                        onClick={() => flipping(currentPage + 1)}
                    >Наступний</Link>
                </li>}
            {startEndButton && <li className={"pagination-figures-item" + (currentPage === endCount ? ' disabled' : '')}>
                <Link className="pagination-figures-link" to={''}
                    onClick={() => flipping(endCount)}
                >Кінець</Link>
            </li>}

        </ul>
    )
}
export default PaginationFigures;