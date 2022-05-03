import React, {useState, useEffect} from "react";

import './blog.scss'
import BlogItem from "./blog-item";
import {withFreedomstoreService} from "../hoc";
import Spinner from "../spinner";
import {withRouter} from "react-router-dom";
import {Page} from "../pages";

const Blog_orig = (props) => {

//
//     store={
//         id:null,
//     loading:true,
//         blogDB: null,
//         blogItem:null
// }
    const [id, setId] = useState(null),
        // [loading,setLoading]=useState(true),
        [blogDb, setBlogDb] = useState({
            Db: null,
            loading: true
        }),
        [blogItem, setBlogItem] = useState(null)

    useEffect(() => {
        let cancelled = false;
        const {getBlogItems, getBlogItemsItem} = props.freedomstoreService
        const id = +props.match.params.id


        console.log(getBlogItems())
        console.log(blogDb)
        const res = getBlogItems();
        !cancelled && setBlogDb({
            Db: res,
            loading: false
        });
        console.log(blogDb)
        !cancelled && setId(id);
        console.log(`in id or not ${blogDb.loading}`)
        if (!!id) {
            console.log(`into id ${getBlogItemsItem}`)
            const item = getBlogItemsItem(+id);
            setBlogItem(item)
        }
        return () => cancelled = true;

    }, [props.match.params.id])

    return <div className="wrapper_blog">
        {console.log(`id ${typeof (id)}, blogDb ${blogDb.loading} props.match.params ${props.match.params.id} blogItem ${blogItem}`)}
        {blogDb.loading && <Spinner/>}
        {(!blogDb.loading && !id) && <BlogItem blogItemDb={blogDb.Db}/>}

        {!!id && !!blogItem && <Page data={blogItem}/>}
    </div>
    // return  <BlogItem />


}

export default withRouter(withFreedomstoreService()(Blog_orig));