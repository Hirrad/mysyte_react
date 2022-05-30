import React, {useReducer,createContext} from 'react'
import reducer from'../../reducers'
const initialState = {
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
    error:false
}
const CurrentUserContext = createContext('');
const CurrentUserProvider = ({children}) => {
    // const [state, setState] = useState({
    //     isLoading: false,
    //     isLoggedIn: null,
    //     currentUser: null
    // })
    const state=useReducer(reducer, initialState);
    return (
        // <CurrentUserContext.Provider value={[state, setState]}>
        //     {children}
        // </CurrentUserContext.Provider>
        <CurrentUserContext.Provider value={state}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export {CurrentUserContext, CurrentUserProvider}