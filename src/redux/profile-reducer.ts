import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status:"",
};

const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.newPost, likesCount: 0};
            return {...state, newPostText:newPost, posts: [...state.posts, newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        case SET_STATUS:
            debugger
            return {...state, status: action.payload.status}
        default:
            return state;
    }
}


export const addPostActionCreator = (newPost:String) => ({type: ADD_POST, newPost})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    }
}
export const setStatus = (status:any) =>{
    return {
        type:SET_STATUS,
        payload:{
            status
        }
    }
}

export const getUserProfile = (userId:any) =>{
    return (dispatch:any) =>{
        //@ts-ignore
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
            }
        )
    }
}

export const getStatus = (userId:any)=>{
    return (dispatch:any)=>{
        debugger
        //@ts-ignore
        profileAPI.getStatus(userId).then((response)=>{
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status:any) =>{
    return (dispatch:any)=>{
        //@ts-ignore
        profileAPI.updateStatus({status}).then((response)=>{
            if(response.data.resultCode===0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;