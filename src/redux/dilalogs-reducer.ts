const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action: any) => {

    //  let stateCopy = {...state}

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let newMessage = {id: 6, message: action.newMessageBody};
            return {...state, newMessageBody: "", messages: [...state.messages, newMessage]}
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody:string) => ({type: SEND_MESSAGE, newMessageBody})
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;