import React, { Fragment, useEffect, useState, useContext, useRef } from "react";

import { useFetch } from '../../hooks'

const mommentsDelete = (apiUrl,id,user) => {
    const [{ response:responseDeleteCommit,
        isLoading: isLoadingDeleteCommit,
         error:errorDeleteCommit },
          doFetchDeleteCommit] = useFetch(apiUrl.urlPost);

const DeleteCommit=(id)=>{
//        if(contentCommit.current.value==='') return
//        console.log('popala')
//        doFetchPostCommit({
//            method: 'post',
//            data: {
//                content: contentCommit.current.value            
//            }
//        })
//        contentCommit.current.value=''
//    },[doFetchPostCommit]
console.log(`id`,id)}

    // const [visibleComment, setVisibleComment] = useState(false)




   return{responseDeleteCommit, isLoadingDeleteCommit,
    errorDeleteCommit }
    
}

export default mommentsDelete;