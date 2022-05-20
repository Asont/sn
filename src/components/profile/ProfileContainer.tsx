import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';
import {withRouter} from "../hoc/withRouter";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.id;
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    userId:state.auth.id,
})

let withAuthAndRedirectAndPropsProfileContainer =  compose (
    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)



export default withAuthAndRedirectAndPropsProfileContainer;