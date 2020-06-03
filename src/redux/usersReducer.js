const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
        {id: 1, fotoUrl: 'https://mult.tv/images/super-krylya.webp', fullName: 'Alex', followed: true, status: 'student', location: {city: "Krasnodar", country: "Russian"}},
        {id: 2, fotoUrl: 'https://mult.tv/images/super-krylya.webp', fullName: 'John', followed: false, status: 'student', location: {city: "New-York", country: "USA"}},
        {id: 3, fotoUrl: 'https://mult.tv/images/super-krylya.webp', fullName: 'Mia', followed: true, status: 'student', location: {city: "Berlin", country: "Germany"}},
        {id: 4, fotoUrl: 'https://mult.tv/images/super-krylya.webp', fullName: 'Zofia', followed: false, status: 'student', location: {city: "Warsaw", country: "Poland"}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
              ...state,
              users: state.users.map(user => {
                  if (user.id === action.userId) {
                      return {...user, followed: true}
                  }
                  return user
              })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})



export default usersReducer;