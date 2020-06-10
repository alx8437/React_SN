import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';
import avatar from "../../assets/images/userNoPhoto.png"

class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pageCount = [];
        for (let i = 1; i <= pages; i += 1) {
            pageCount.push(i)
        }

        return (

            <div>
                <div>
                    {pageCount.map(p => {
                        return <span onClick={() => {
                            this.onPageChanged(p)
                        }} className={(p === this.props.currentPage) ? styles.pageActive : ''}>{p}</span>
                    })}
                </div>

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