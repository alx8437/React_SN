import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
});


export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data);
};

export const unFollowingUser = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(res => res.data);
};

export const followingUser = (userId) => {
    return instance.post(`follow/${userId}`, {})
        .then(res => res.data);
};
