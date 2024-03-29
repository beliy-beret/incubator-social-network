import { DialogListActionsType, MessageListActionsType } from './actions'
import { DialogMessageType, DialogType } from 'API/api'

import { combineReducers } from 'redux'

const dialogListState = {
  dialogList: [] as DialogType[],
  activeDialogId: null as number | null,
}

export type DialogListStateType = typeof dialogListState

export const dialogListReducer = (
  state: DialogListStateType = dialogListState,
  action: DialogListActionsType
): DialogListStateType => {
  switch (action.type) {
    case 'dialogs/SET-DIALOG-LIST':
      return {
        ...state,
        dialogList: action.payload.dialogList,
      }
    case 'dialogs/SET-ACTIVE-DIALOG-INDEX':
      return {
        ...state,
        activeDialogId: action.payload.dialogId,
      }
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
    case 'messages/SET-MESSAGE-TO-MESSAGE-LIST':
      return {
        ...state,
        messageList: [...state.messageList, { ...action.payload.message }],
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
