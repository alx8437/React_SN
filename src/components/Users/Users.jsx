import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';
import avatar from "../../assets/images/userNoPhoto.png"

class Users extends React.Component{


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            if (this.props.users.length === 0) {
                this.props.setUsers(response.data.items);
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
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
                                    this.props.followUser(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.unFollowUser(u.id)
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

}

export default Users;