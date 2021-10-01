const initialState = {
    blog: ['1','er']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BLOG_LOADED':
            return {
                blog: action.blogLoaded,

            }
        default:
            return state;
    }
}
export default reducer;