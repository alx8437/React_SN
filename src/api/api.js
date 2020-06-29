import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
});


// export const getUsersApi = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(res => res.data);
// };
//
// export const unFollowingUserApi = (userId) => {
//     return instance.delete(`follow/${userId}`)
//         .then(res => res.data);
// };
//
// export const followingUserApi = (userId) => {
//     return instance.post(`follow/${userId}`, {})
//         .then(res => res.data);
// };
//
//
//
// export const setUserProfileApi = (userId) => {
//     return instance.get(`profile/${userId}`)
// }

export const userApi = {
    get(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(res => res.data);
    },
    set(userId) {
        return instance.get(`profile/${userId}`);
    },

};

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data);
    },
};
