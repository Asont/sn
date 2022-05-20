import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGES = "SET_CURRENT_PAGES"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[]
};

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            //@ts-ignore
            return {...state, users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: true} : m)}
        case UNFOLLOW:
            //@ts-ignore
            return {...state, users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: false} : m)}
        case SET_USERS:
            return {...state, users: action.payload.users}
        case SET_CURRENT_PAGES:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
            ...state,
            followingInProgress:action.payload.isFollowing?
                [...state.followingInProgress, action.payload.userId]
                :state.followingInProgress.filter(id=>id!==action.payload.userId)

        }
        default:
            return state;
    }
}


export const followSuccess = (userId: any) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        },
    } as const
}
export const unfollowSuccess = (userId: any) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        },
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: SET_USERS,
        payload: {
            users
        },
    } as const
}
export const setCurrentPage = (currentPage: any) => {
    return {
        type: SET_CURRENT_PAGES,
        payload: {
            currentPage
        },
    } as const
}
export const setUsersTotalCount = (totalUsersCount: any) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            count: totalUsersCount
        }
    }
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    }
}
export const setIsFollowing = (isFollowing: boolean, userId:number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFollowing,
            userId
        }
    }
}
export const getUsersThunkCreator = (currentPage:any, pageSize:any) => {
    return (dispatch: any) => {
        dispatch(setIsFetching(true))
        // @ts-ignore

        usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            }
        )
    }
}
export const follow = (userId:any) =>{
    return (dispatch:any)=>{
        dispatch(setIsFollowing(true,userId))
        //@ts-ignore
        usersAPI.followUser(userId).then(resultCode=>{
            if(resultCode===0){
                dispatch(followSuccess(userId))
            }
            dispatch(setIsFollowing(false,userId))
        })
    }
}
export const unfollow = (userId:any) =>{
    return (dispatch:any)=>{
        dispatch(setIsFollowing(true, userId))
        //@ts-ignore
        usersAPI.unfollowUser(userId).then(resultCode=>{
            if(resultCode){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(setIsFollowing(false,userId))
        })
    }
}



export default usersReducer;