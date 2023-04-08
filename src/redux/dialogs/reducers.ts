import { DialogListActionsType, MessageListActionsType } from './actions'
import { DialogMessageType, DialogType } from 'API/api'

import { combineReducers } from 'redux'

const dialogListState = [] as DialogType[]
//userMessageList: [] as DialogMessageType[],

export type DialogListStateType = typeof dialogListState

export const dialogListReducer = (
  state: DialogListStateType = dialogListState,
  action: DialogListActionsType
): DialogListStateType => {
  switch (action.type) {
    case 'dialogs/SET-DIALOG-LIST':
      return action.payload.dialogList
    default:
      return state
  }
}

const userMessageListState = {
  messageList: [] as DialogMessageType[],
  totalCount: 0,
  currentPage: 1,
}

export type UserMessageListStateType = typeof userMessageListState

export const userMessageListReducer = (
  state: UserMessageListStateType = userMessageListState,
  action: MessageListActionsType
): UserMessageListStateType => {
  switch (action.type) {
    case 'messages/SET-MESSAGE-LIST':
      return {
        ...state,
        messageList: action.payload.messageList,
      }
    case 'messages/SET-MESSAGE-LIST-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    case 'messages/SET-MESSAGES-TOTAL-COUNT':
      return {
        ...state,
        totalCount: action.payload.totalCount,
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  dialogList: dialogListReducer,
  userMessageList: userMessageListReducer,
})

export default reducer
