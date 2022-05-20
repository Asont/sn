import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    setIsFollowing, getUsersThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

// @ts-ignore
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setIsFollowing={this.props.setIsFollowing}
                followingInProgress={this.props.followingInProgress}
                isAuth={this.props.isAuth}
            />
        </>
    }
}

/*const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth:state.auth.isAuth,
    }
}*/
const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth:getIsAuth(state),
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setIsFollowing,
        getUsers:getUsersThunkCreator,
    })
)(UsersAPIComponent)


