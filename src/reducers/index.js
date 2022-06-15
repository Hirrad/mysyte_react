const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'SET_AUTHORIZED':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                currentUser: action.payload
            };
        case 'SET_UNAUTHORIZED':
console.log('SET_UNAUTHORIZED')
            return {
                ...state,
                currentUser: null,
                isLoggedIn: false
            };
            case 'SET_ERROR':
                return {
                    ...state,                    
                    error: action.payload
                };
        default:
            return state;
    }

};

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BLOG_LOADED':
//             return {
//                 blog: action.blogLoaded,

//             }
//         default:
//             return state;
//     }
// }
export default reducer;