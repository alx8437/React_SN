import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    fotoUrl: 'https://mult.tv/images/super-krylya.webp',
                    fullName: 'Alex',
                    followed: true,
                    status: 'student',
                    location: {city: "Krasnodar", country: "Russian"}
                },
                {
                    id: 2,
                    fotoUrl: 'https://mult.tv/images/super-krylya.webp',
                    fullName: 'John',
                    followed: false,
                    status: 'student',
                    location: {city: "New-York", country: "USA"}
                },
                {
                    id: 3,
                    fotoUrl: 'https://mult.tv/images/super-krylya.webp',
                    fullName: 'Mia',
                    followed: true,
                    status: 'student',
                    location: {city: "Berlin", country: "Germany"}
                },
                {
                    id: 4,
                    fotoUrl: 'https://mult.tv/images/super-krylya.webp',
                    fullName: 'Zofia',
                    followed: false,
                    status: 'student',
                    location: {city: "Warsaw", country: "Poland"}
                }
            ]
        );
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.fotoUrl}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>

                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;