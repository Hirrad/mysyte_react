import {useContext, useEffect} from "react";

import {useLocalStorage} from "../../../hooks";
import {CurrentUserContext} from "../../freedomstore-service-context";
import {useFetch} from "../../../hooks";

const AuthorizationToken = ({children}) => {
//
    const [, setCurrentUserState] = useContext(CurrentUserContext)
    const [, dispatch] = useContext(CurrentUserContext)
    const [{response}, doFetch] = useFetch(`/users/me`);
    const [token] = useLocalStorage('tokenJWS')
    console.log('auth',token)
    useEffect(() => {
        if (!token) {
            setCurrentUserState(state => ({
                ...state,
                // currentUser: null,
                isLoggedIn: false
            }))
            return;
        }

        doFetch();
        // setCurrentUserState(state => ({
        //     ...state,
        //     isLoading: true
        // }))
        dispatch({type:'LOADING'})
        
    }, [token, doFetch, setCurrentUserState,dispatch])
    useEffect(() => {
        if (!response) return;
        // setCurrentUserState(state => ({
        //     ...state,
        //     isLoading: false,
        //     isLoggedIn: true,
        //     currentUser: response.data.user
        // }))
        
        dispatch({
            type: 'SET_AUTHORIZED',
            payload: response
        })
        // console.log('init')
    }, [response,dispatch])
    return children

}
export default AuthorizationToken;