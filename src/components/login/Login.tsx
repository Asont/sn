import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {loginAuthUser} from '../../redux/auth-reducer';
import {Input} from '../common/FormsControls/FormControls';
import {required} from "../../utils/validators/validators";
import {Navigate} from 'react-router-dom';

const LoginForm = (props: any) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"remember me"} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        props.loginAuthUser(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state:any)=>{
    return {
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    loginAuthUser
})(Login)

