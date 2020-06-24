import React from "react";
import styles from "./Users.module.css";
import avatar from "../../assets/images/userNoPhoto.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageCount = [];
    for (let i = 1; i <= pages; i += 1) {
        pageCount.push(i);
    }

    return (
        <div>
            <div>
                {pageCount.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p);
                    }} className={(p === props.currentPage) ? styles.pageActive : ''}>{p}</span>;
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    className={styles.userPhoto}
                                    src={(u.photos.small === null) ? avatar : u.photos.small}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.toggleIsFollow} onClick={() => {
                                    props.toggleFollowingProgress(true);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
                                        }
                                    )
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.followUser(u.id);
                                            }
                                            props.toggleFollowingProgress(false);
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.toggleFollowingProgress(true)
                                    axios.post(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"},
                                        },
                                    )
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unFollowUser(u.id);
                                            }
                                            props.toggleFollowingProgress(false)
                                        });


                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>

                    </span>
                    </div>,
                )
            }
        </div>
    );
};

export default Users;