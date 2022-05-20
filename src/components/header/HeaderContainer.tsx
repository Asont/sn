import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, loginOutAuthUser} from "../../redux/auth-reducer";;



class HeaderContainer extends React.Component<any, any> {

    render() {
        return (
            <Header {...this.props}/>
        )


    }
}

const mapStateToProps = (state: any) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, { loginOutAuthUser})(HeaderContainer)


