import React, {useEffect, useState} from "react";
// import {FreedomstoreServiceConsumer} from "../freedomstore-service-context";
// import Spinner from "../spinner";
// import BlogItem from "../blog/blog-item";
// import {Page} from "../pages";

const pageViewRedirectionById = (Page, getDb) => (Wrapped) => {

    return (props) => {
        const [, setId] = useState(null)
            // [loading,setLoading]=useState(true),
        const    [Db, setDb] = useState({
                Db: null,
                loading: true
            }),
            [, setItem] = useState(null)

        useEffect(() => {
            let cancelled = false;
            const {getBD, getItem} = props.freedomstoreService
            const id = +props.match.params.id


            console.log(getBD())
            console.log(Db)
            const res = getBD();
            !cancelled && setDb({
                Db: res,
                loading: false
            });
            console.log(Db)
            !cancelled && setId(id);
            console.log(`in id or not ${Db.loading}`)
            if (!!id) {

                const item = getItem(+id);
                setItem(item)
            }
            return () => cancelled = true;

        }, [props.match.params.id,Db,props.freedomstoreService])
        return <Wrapped {...props}/>


    }

}
export default pageViewRedirectionById;