import React, {ChangeEvent} from 'react';
import {Navigate} from "react-router-dom"
import DialogItem from './dialog/Dialog';
import s from './Dialogs.module.css';
import Message from "./message/Message";
import {Field, Form, reduxForm} from "redux-form";
import TextArea from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props: any) => {
    //@ts-ignore
    let dialogsElements = props.dialogspage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    //@ts-ignore
    let messagesElements = props.dialogspage.messages.map(m => <Message key={m.id} message={m.message}/>);


    if(!props.isAuth) return <Navigate to={"/login"}/>

    const addNewMessage = (values:any)=>{
        props.sendMessage(values.newMessageBody)
    }

    const maxLength= maxLengthCreator(50)

    const AddMessageFrom = (props:any)=>{
        return (
            <Form onSubmit={props.handleSubmit}>
                <Field component={TextArea} validate={[required,maxLength]} name={"newMessageBody"} placeholder={'Enter your message'}/>
                <div>
                    <button>Send</button>
                </div>
            </Form>
        )
    }
    const AddMessageReduxForm =  reduxForm({
        // a unique name for the form
        form: 'dialogAddMessageForm'
    })(AddMessageFrom)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;