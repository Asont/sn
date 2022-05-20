import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: any, email: any, login: any, isAuth: any) => {

    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth,
        },
    }
}


export const getAuthUserData = () => {
    return (dispatch: any) => {
        authApi.authMe().then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true))
            }

        })
    }
}


export const loginAuthUser = (email: any, password: any, rememberMe: any) => (dispatch: any) => {
    authApi.login(email, password, rememberMe).then((res: any) => {
        if (res.data.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some Error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    })
}
export const loginOutAuthUser = () => (dispatch: any) => {
    authApi.loginOut().then((res: any) => {
        if (res.data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;