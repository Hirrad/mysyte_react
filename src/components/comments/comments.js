import React, { Fragment, useEffect, useState, useContext, useRef, useCallback } from "react";
import './comments.scss'
import {
    FaTrashCan,
    FaPencil
} from '../buttons/font-awesome'
import { useFetch } from '../../hooks'
import { CurrentUserContext } from "../freedomstore-service-context";
import Moment from 'react-moment';
import pic from '../../img/bg_header_f.png'
import { useParams } from "react-router-dom";

const Comments = ({ apiUrl }) => {
    console.log(apiUrl)
    const [userData] = useContext(CurrentUserContext);
    const { isLoading, isLoggedIn, currentUser } = userData
    console.log(currentUser)
    const { id } = useParams()
    // const urlPost=`/blogs/${id}/comment-blog`
const [changeContentCommit,setChangeContentCommit]=useState('')
    const [CommitsToggleId, setCommitsToggleId] = useState(null)
    const idComment = useRef('')
    const refEditComment = useRef()
const valueDefaultComment=useRef()

    //post
    const [{ response: responsePostCommit,
        isLoading: isLoadingPostCommit,
        error: errorPostCommit },
        doFetchPostCommit] = useFetch(apiUrl.urlPost);
    const contentCommit = useRef('Напішіть свій коментарій тут')
// console.log(contentCommit)
    const postNewCommit = useCallback(
        () => {
            console.log(contentCommit.current)
            if (contentCommit.current.value === '') return
            console.log('popala')
            doFetchPostCommit({
                method: 'post',
                data: {
                    content: contentCommit.current.value
                }
            })
            contentCommit.current.value = ''
        }, [doFetchPostCommit,contentCommit]
    )
    // const postNewCommit = () => {
    //         console.log(contentCommit.current)
    //         if (contentCommit.current.value === '') return
    //         console.log('popala')
    //         doFetchPostCommit({
    //             method: 'post',
    //             data: {
    //                 content: contentCommit.current.value
    //             }
    //         })
    //         contentCommit.current.value = ''
    //     }
    
    //post

    //update
    let roock = false;
    const [updateThisComment, setUpdateThisComment] = useState(false)
    const updateTextComment = useRef('')
    // const refEditCommit =useRef()
    const [{ response: responseUpdateCommit,
        isLoading: isLoadingUpdateCommit,
        error: errorUpdateCommit },
        doFetchUpdateCommit] = useFetch(`${apiUrl.urlDelete}${idComment.current}`);

    const updateDeleteCommit = ( id) => {
        if(!updateThisComment&&!deleteThisComment) return
        // setCommitsToggleId(id)
        idComment.current = id

        if(updateThisComment){
            // setCommitsToggleId(id)
            doFetchUpdateCommit(
                {
                    method: 'PUT',
                    data: {
                        data:{
                            "content": refEditComment.current.value
                        }
                    }
                }
            )
            setDeleteThisComment(false)
            setUpdateThisComment(false)
            setChangeContentCommit('')
            // refEditComment.current.value=''
        }
        if(deleteThisComment){
            doFetchDeleteCommit({
                method: 'DELETE'
            });
            setDeleteThisComment(false)
            setUpdateThisComment(false)
            console.log(`id`, id)
        }



    }
    const confirmationEdit =(id,content)=>{
        setChangeContentCommit(content)
        setUpdateThisComment(true)
        setDeleteThisComment(false)
        setCommitsToggleId(id)
    }
    const ClickInNoComment = (e) => {
        // console.log(e.target)
        // console.log(refEditCommit.current.contains(e.target))

    }
    //update
        //delete
        const [deleteThisComment, setDeleteThisComment] = useState(false)
        const [{ response: responseDeleteCommit,
            isLoading: isLoadingDeleteCommit,
            error: errorDeleteCommit },
            doFetchDeleteCommit] = useFetch(`${apiUrl.urlDelete}${idComment.current}`);
    
        // const deleteCommit = (id) => {
        //     // idComment.current = id
        //     // doFetchDeleteCommit({
        //     //     method: 'DELETE'
        //     // });
        //     // setDeleteThisComment(false)
        //     // setCommitsToggleId(null)
        //     // console.log(`id`, id)
        // }
        const confirmationDelete=(id)=>{
            setDeleteThisComment(true)
            setUpdateThisComment(false)
            setCommitsToggleId(id)
    
    
        }
        //delete
    //get 
    const [{ response, isLoading: isLoadingCommit, error }, doFetch] = useFetch(apiUrl.urlGet);
    const [visibleComment, setVisibleComment] = useState(false)
    // const [showComments,setShowComments]= useState()
    const showComments = () => {
        setVisibleComment(visible => !visible)
        setCommitsToggleId(null)
    }

    useEffect(() => {
        if (!visibleComment) return;
        doFetch();
        idComment.current = ''
    }, [visibleComment,
         responsePostCommit,
          doFetch,
           responseDeleteCommit,
           responseUpdateCommit])
    //get

    console.log('ref', idComment.current)
    // ?populate=comment_blogs
    // const stringifiedParam=stringify({
    //     sort: ['comment_blogs:asc'],
    // //   filters: {
    // //     title: {
    // //       $eq: 'hello',
    // //     },
    // //   },
    //   populate: 'comment_blogs',
    //   fields: ['comment_blogs'],
    // //   pagination: {
    // //     pageSize: 10,
    // //     page: 1,
    // //   },
    //   publicationState: 'live',
    //   locale: ['en'],
    // }, {
    //   encodeValuesOnly: true, // prettify url
    // })
    // const url=`/blogs/${id}?populate=comment_blogs`
    // const urlGet = `/comment-blogs?filters[blog][id]=${id}`



    console.log(response)
    console.log(updateTextComment)
    if (!apiUrl.urlGet) return null;
    return <Fragment>
        {isLoggedIn && <div className='comment'>
            <div className="comment__wrapper wrapper">

                <textarea className="comment__textarea"
                    placeholder="Напішіть свій коментарій тут"
                    ref={contentCommit}
                    // defaultValue={contentCommit.current.value}
                    // defaultValue='Напішіть свій коментарій тут'

                />
                <div className="login">
                    <div className="login__wrapper">
                        <div className="login__avatar avatar">
                        {/* <img src={`http://localhost:1337${currentUser.avatar.formats.thumbnail.url}`} alt="" /> */}
                        </div>
                        <div className="login__name">{currentUser.username}</div>

                    </div>
                    <div className="login__send-button"
                        onClick={postNewCommit}>
                        Відправити
                    </div>

                </div>
            </div>

            <span className='separator'></span>
        </div>}
        {visibleComment &&
            response && response.data
            && response.data.length !== 0 && <div className="visible"
                onClick={() => setVisibleComment(visible => !visible)}

            >Скрити коментарі</div>}
        {visibleComment &&
            response &&
            response.data &&
            response.data.length !== 0 ?
            response.data.map(({ id, attributes }, index) => (
                <div className='comment' key={index}
                    onClick={(e) => { ClickInNoComment(e) }}
                >
                    <div className="comment__wrapper wrapper">
                        <div className="login">
                            <div className="login__data data">
                            {<Moment date={attributes.publishedAt} format="YYYY.MM.DD HH:mm"/>}
                                {/* {attributes.publishedAt} */}
                            </div>
                            {attributes.createdAt!==attributes.updatedAt&&<div className="login__data ">Відредаговано</div>}
                            {(deleteThisComment||updateThisComment)&&CommitsToggleId === id ?
                                <Fragment>
                                <span className='d-flex '>
                                {(!updateThisComment||!deleteThisComment)?<div className="login__send-button"
                                    onClick={() => updateDeleteCommit(id)}>
                                    {updateThisComment?'Зберігти':'Видалити'}
                                </div>:null}
                                <div className="login__send-button login__send-button--ml"
                                    onClick={'postNewCommit'}>
                                    Відмінити
                                </div>
                                </span>
                                </Fragment>:<div className="login__wrapper">
                                <div className="login__avatar avatar">
                                    {/* <img src={`http://localhost:1337${attributes.user.thumbnail.url}`} alt="" /> */}
                                </div>
                                <div className="login__name">{attributes.user.username}</div>
                                <div className="action-buttons">

                                    {isLoggedIn &&
                                        attributes.user.username === currentUser.username
                                        && <Fragment>
                                            <span
                                                onClick={(e) => confirmationEdit(id,attributes.content)}

                                            >
                                                <FaPencil />
                                            </span>
                                            <span
                                                onClick={() => confirmationDelete(id)}
                                            >
                                                <FaTrashCan />
                                            </span>
                                        </Fragment>}

                                </div>
                            </div>}
                        </div>
                        {CommitsToggleId === id&&updateThisComment ? <textarea className="comment__textarea"
                            placeholder="Напішіть свій коментарій тут"
                            ref={refEditComment}
                            // defaultValue={'Напішіть свій коментарій тут'}
                            value={changeContentCommit} 
                            // value={valueDefaultComment.current}
                            onChange={e=>setChangeContentCommit(e.target.value)}
                            defaultValue={contentCommit.current.value?'contentCommit.current.value':'f'}
                        >{attributes.content}</textarea> : <div className="comment__text">{attributes.content}</div>}
                        {/* <div className="comment__text">{attributes.content}</div>                         */}

                    </div>

                </div>
            )) : <div className="visible"
                onClick={() => showComments()}
            >{(visibleComment &&
                response &&
                response.data &&
                response.data.length === 0) ?
                'Нажаль поки не має жодного коментаря. Будьте першими!' : 'Подивитися коментарі'}
            </div>}
    </Fragment>
}
export default Comments;

