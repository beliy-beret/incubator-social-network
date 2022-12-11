import {ActionTypes, DialogsPageType} from "../_store";


export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
  switch (action.type) {
    case 'CREATE-MESSAGE':
      state.dialogs.messageList.forEach((item: any) => {
        if (item.userID === action.payload.userID) {
          item.messageList.push(action.payload.message)
        }
      });
      return;
    default:
      return state;
  }
}
