import React, { Fragment, useEffect, useState, useContext, useRef, useCallback } from "react";
import './comments.scss'
import {
    FaTrashCan,
    FaPencil,
    FaCircleUser
} from '../buttons/font-awesome'
import { useFetch } from '../../hooks'
import { CurrentUserContext } from "../freedomstore-service-context";
import Moment from 'react-moment';
import Spinner from "../spinner";
import { LoadingBlocks,PaginationFigures } from "../pagination";
const Comments = ({ apiUrl }) => {
    const [userData] = useContext(CurrentUserContext);
    const { isLoggedIn, currentUser } = userData  
    const [changeContentCommit, setChangeContentCommit] = useState('')
    //CommitsToggleId and idComment:saves the comment id for editing or deleting
    const [CommitsToggleId, setCommitsToggleId] = useState(null)
    const idComment = useRef('')
    //refEditComment:data will be edited while editing on the server
    const refEditComment = useRef()
    // const valueDefaultComment = useRef()
//Start Pagination
const [currentPage, setCurrentPage] = useState(1)
const [loadingBlocksTrueFalse, setLoadingBlocksTrueFalse] = useState(false)
const [limitPage] = useState(10)

const flipping = (page, loadingBlocks = false) => {
    // console.log(e)
    setCurrentPage(page<=0?-(page)+1:page)
    setLoadingBlocksTrueFalse(loadingBlocks)
}
//End Pagination
    //post    
    const [{ response: responsePostCommit,
        isLoading: isLoadingPostCommit},
        doFetchPostCommit] = useFetch(apiUrl.urlPost);
    const contentCommit = useRef('Напішіть свій коментарій тут')
    const postNewCommit = useCallback(
        () => {
            // console.log(contentCommit.current)
            if (contentCommit.current.value === '') return
            // console.log('popala')
            doFetchPostCommit({
                method: 'post',
                data: {
                    content: contentCommit.current.value
                }
            })
            contentCommit.current.value = ''
        }, [doFetchPostCommit, contentCommit]
    )


    //post

    //update
    // let roock = false;
    const [updateThisComment, setUpdateThisComment] = useState(false)
    // const updateTextComment = useRef('')
    // const refEditCommit =useRef()
    const [{ response: responseUpdateCommit,
        isLoading: isLoadingUpdateCommit},
        doFetchUpdateCommit] = useFetch(`${apiUrl.urlDelete}${idComment.current}`);

    const updateDeleteCommit = (id) => {
        if (!updateThisComment && !deleteThisComment) return
        idComment.current = id
        if (updateThisComment) {

            doFetchUpdateCommit(
                {
                    method: 'PUT',
                    data: {
                        data: {
                            "content": refEditComment.current.value
                        }
                    }
                }
            )

        }
        if (responseUpdateCommit) {
            setDeleteThisComment(false)
            setUpdateThisComment(false)
            setChangeContentCommit('')
        }
        if (deleteThisComment) {
            doFetchDeleteCommit({
                method: 'DELETE'
            });
        }
        if (responseUpdateCommit) {
            setDeleteThisComment(false)
            setUpdateThisComment(false)
        }


    }

    const confirmationEdit = (id, content) => {
        setChangeContentCommit(content)
        setUpdateThisComment(true)
        setDeleteThisComment(false)
        setCommitsToggleId(id)
    }
    //update
    //delete
    const [deleteThisComment, setDeleteThisComment] = useState(false)
    const [{ response: responseDeleteCommit,
        isLoading: isLoadingDeleteCommit},
        doFetchDeleteCommit] = useFetch(`${apiUrl.urlDelete}${idComment.current}`);

    const confirmationDelete = (id) => {
        setDeleteThisComment(true)
        setUpdateThisComment(false)
        setCommitsToggleId(id)


    }
    const cancelCommit = () => {
        setDeleteThisComment(false)
        setUpdateThisComment(false)
        setCommitsToggleId(null)

    }
    //delete
    //get 
    const [{ response,
        isLoading: isLoadingCommit,
         }, doFetch] = useFetch(`${apiUrl.urlGet}&pagination[page]=${currentPage}&pagination[pageSize]=${limitPage}`);
    const [visibleComment, setVisibleComment] = useState(false)
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
        responseUpdateCommit,
        currentPage])
    //get

    if (!apiUrl.urlGet) return null;
    return <Fragment>
        {/* Put Comment */}
        {isLoggedIn && <div className='comment' id='comment'>
            <div className="comment__wrapper wrapper">

                <textarea className="comment__textarea"
                    placeholder="Напішіть свій коментарій тут"
                    ref={contentCommit}
                // defaultValue={contentCommit.current.value}
                // defaultValue='Напішіть свій коментарій тут'

                />
                <div className="login">
                    <div className="login__wrapper">
                        <div className="avatar ">
                            {!currentUser.avatar ? <FaCircleUser /> :
                                <img src={`http://localhost:1337${currentUser.avatar.formats.thumbnail.url}`} alt="avatar" />
                            }
                        </div>
                        <div className="login__name">{currentUser.username}</div>

                    </div>
                    <div className={isLoadingPostCommit ?
                        'login__send-button login__send-button--grey' :
                        'login__send-button'}
                        onClick={postNewCommit}>
                        {isLoadingPostCommit &&
                            <Spinner styLe={'login__spinner'} />}
                        Відправити
                    </div>

                </div>
            </div>

            <span className='separator'></span>
        </div>}
        {/* End Put Comment */}
        {/* visible Comment */}
        {visibleComment &&
            response && response.data
            && response.data.length !== 0 && <div className="visible"
                onClick={() => setVisibleComment(visible => !visible)}

            >Скрити коментарі</div>}
        {/* End visible Comment */}
        {/* Get Commmit */}
        {visibleComment && isLoadingCommit && <Spinner />}
        {visibleComment &&
            response &&
            response.data &&
            response.data.length !== 0 ?
            response.data.map(({ id, attributes }, index) => (
                <div className='comment' key={index}>
                    <div className="comment__wrapper wrapper">
                        <div className="login">
                            <div className="login__data data">
                                {<Moment date={attributes.publishedAt} format="YYYY.MM.DD HH:mm" />}
                                {/* {attributes.publishedAt} */}
                            </div>
                            {/* {attributes.createdAt!==attributes.updatedAt&&<div className="edited ">Відредаговано</div>} */}
                            {(deleteThisComment || updateThisComment)
                                && CommitsToggleId === id ?
                                <Fragment>
                                    <span className='d-flex '>
                                        {(!updateThisComment || !deleteThisComment)
                                            ? <div className="login__send-button"
                                                onClick={() => updateDeleteCommit(id)}>
                                                {(isLoadingUpdateCommit
                                                    || isLoadingDeleteCommit) &&
                                                    <Spinner styLe={'login__spinner'} />}
                                                {updateThisComment ? 'Зберігти' : 'Видалити'}
                                            </div> : null}
                                        <div className="login__send-button login__send-button--ml"
                                            onClick={cancelCommit}>
                                            Відмінити
                                        </div>
                                    </span>
                                </Fragment> : <div className="login__wrapper">
                                    <div className="login__avatar avatar">
                                        {attributes.user.thumbnail ?
                                            <img src={`http://localhost:1337${attributes.user.thumbnail.url}`} alt="" />
                                            : <FaCircleUser />
                                        }
                                    </div>
                                    <div className="login__name">{attributes.user.username}</div>
                                    <div className="action-buttons">

                                        {isLoggedIn &&
                                            attributes.user.username === currentUser.username
                                            && <Fragment>
                                                <span
                                                    onClick={(e) => confirmationEdit(id, attributes.content)} >
                                                    <FaPencil />
                                                </span>
                                                <span
                                                    onClick={() => confirmationDelete(id)}>
                                                    <FaTrashCan />
                                                </span>
                                            </Fragment>}

                                    </div>
                                </div>}
                        </div>
                        {/* Start comment text and edit the selected comment by id */}
                        {CommitsToggleId === id && updateThisComment ?
                            <textarea className="comment__textarea"
                                placeholder="Напішіть свій коментарій тут"
                                ref={refEditComment}
                                value={changeContentCommit}
                                onChange={e => setChangeContentCommit(e.target.value)}
                            >{attributes.content}
                            </textarea> :
                            <div className="comment__text">{attributes.content}
                                {attributes.createdAt !== attributes.updatedAt &&
                                    <div className="edited ">Відредаговано</div>}
                            </div>}
                        {/* End comment text and edit the selected comment by id */}
                    </div>
                </div>)):
              <div className="visible"
                onClick={() => showComments()}
            >{(visibleComment &&
                response &&
                response.data &&
                response.data.length === 0) ?
                'Нажаль поки не має жодного коментаря. Будьте першими!' : 'Подивитися коментарі'}
            </div>}
        {/* End Get Commit */}
        {(!isLoadingCommit && response) && <PaginationFigures
        totalCount={response.meta.pagination.total}
        limit={limitPage}
        flipping={flipping}
        currentPage={currentPage} 
        maxInPage={10}
        ellipsisSeparator={true}
        separator='...'
        startEndButton={false}
        nextForward={true}
        showingWhenPagesOne={true}
        scrollToBlock={'comment'}
        
        />}
    </Fragment>
}
export default Comments;

