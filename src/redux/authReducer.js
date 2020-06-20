const SET_AUTH_USER = "SET_AUTH_USER";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state

    }
};


export const setUserAuth = (data) => ({type: SET_AUTH_USER, data})

export default authUserReducer;