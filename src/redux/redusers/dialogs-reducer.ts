import {CreateMessageActionType} from "../actions/actions";
import {DialogType} from "../../pages/Dialogs/MessageList/MessageList";

const InitialState = {
  dialogs: {
    userList: [
      {id: 1, name: 'Andrey'},
      {id: 2, name: 'Viktor'},
      {id: 3, name: 'Anna'},
      {id: 4, name: 'Niki'},
      {id: 5, name: 'Vlad'}
    ],
    messageList: [
      {userID: 1, messageList: ['Hello !', 'My name is Andrey']},
      {userID: 2, messageList: ['Hello !', 'My name is Viktor']},
      {userID: 3, messageList: ['Hello !', 'My name is Anna']},
      {userID: 4, messageList: ['Hello !', 'My name is Niki']},
      {userID: 5, messageList: ['Hello !', 'My name is Vlad']}
    ]
  }
}

type InitialStateType = typeof InitialState;

export const dialogsReducer = (state: InitialStateType = InitialState, action: CreateMessageActionType) => {
  switch (action.type) {
    case 'CREATE-MESSAGE':
      state.dialogs.messageList.forEach((item: DialogType) => {
        if (item.userID === action.payload.userID) {
          item.messageList.push(action.payload.message)
        }
      });
      return state;
    default:
      return state;
  }
}
