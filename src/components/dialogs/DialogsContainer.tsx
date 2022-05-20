import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dilalogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state:any) =>{
    return {
        dialogspage: state.dialogsPage,
        isAuth:state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch:any) =>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:(newMessageBody:string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)