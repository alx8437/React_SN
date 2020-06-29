import React from "react";
import styles from "./Users.module.css";
import avatar from "../../assets/images/userNoPhoto.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageCount = [];
    for (let i = 1; i <= pages; i += 1) {
        pageCount.push(i);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.pageChange}>
                {pageCount.map(p => {
                    return <span  onClick={() => {
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
                                ? <button disabled={props.toggleIsFollow.some(id => id === u.id)} onClick={() => {

                                    props.unFollowedThunkCreator(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.toggleIsFollow.some(id => id === u.id)} onClick={() => {

                                    props.followedThunkCreator(u.id)

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