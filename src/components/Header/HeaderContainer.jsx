import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuth} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderApi extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true,
                headers: {"API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"}
            }
            )
            .then(res => {
                this.props.setUserAuth(res.data.data)
            })

    }


    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return {
        login: state.authUser.login,
        isAuth: state.authUser.isAuth
    }
};

const HeaderContainer = connect(mapStateToProps, {setUserAuth})(HeaderApi);
export default HeaderContainer;