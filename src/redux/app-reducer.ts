import { getAuthUserData } from "./auth-reducer";


const INITALIZED_SUCCESS = "INITALIZED_SUCCESS"


let initialState = {
    initialized: false,

};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => {
    return {
        type: INITALIZED_SUCCESS
    }
}


export const initializeApp = () => {
    return (dispatch: any) => {
       let promise =  dispatch(getAuthUserData())
        Promise.all([promise])
            .then(()=>{
                dispatch(setInitializedSuccess())
                }
            )
    }
}



export default appReducer;