import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u =>  <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.fotoUrl}/>
                        </div>
                        <div>
                            {u.followed ? <button>Follow</button> : <button>Unfollow</button>}
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