import React, { useEffect, Fragment } from "react";
import { Link, useLocation } from 'react-router-dom'
import './navigation-in-page.scss'
import { switchPathname } from '../../../utilis'
import { useFetch } from '../../../hooks'
const NavigationInPage = () => {
    const id = useLocation();
    const arrayPathname = id.pathname.split('/').slice(1);
    const category = arrayPathname[0]
    const page = arrayPathname[1]
    const currentPage = switchPathname(category, page)
    const [{ response, error }, doFetch] = useFetch(currentPage.api);
    useEffect(() => {
        if (!currentPage.api | !page) return
        doFetch();
    }, [currentPage.api, doFetch, page])
    return arrayPathname[0] && <div className='navigation-in-page'>
        <span className=' navigation-in-page__home'>
            <Link to='/'>Головна</Link>
        </span>
        <span className='navigation-in-page__separator'>
            /
        </span>
        <span className=' navigation-in-page__home'>
            <Link to={`/${category}`}>{currentPage.name}</Link>
        </span>
        {!!page && <Fragment>
            <span className='navigation-in-page__separator'>
                /
            </span>
            <span className=' navigation-in-page__home'>
                {response && response.data && response.data.attributes.title}
            </span>
        </Fragment>}

    </div>
}
export default NavigationInPage;