const SET_AUTH_USER = "SET_AUTH_USER"

const initialState = {
    id: null,
    email: null,
    login: null
}

const authUserReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data
            }
    }
}



export const setUserAuth = (data) => ({type: SET_AUTH_USER, action: data})

export default authUserReducer;