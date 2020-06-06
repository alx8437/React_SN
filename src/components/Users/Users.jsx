import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';
import avatar from "../../assets/images/userNoPhoto.png"

const Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        debugger
        if (props.users.length === 0) {
            props.setUsers(response.data.items);
        }
    })


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className={styles.userPhoto}
                                src={(u.photos.small === null) ? avatar : u.photos.small}
                            />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.followUser(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.unFollowUser(u.id)
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
                    </div>
                )
            }
        </div>
    )
}

export default Users;