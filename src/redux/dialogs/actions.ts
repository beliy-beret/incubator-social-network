import { DialogMessageType, DialogType } from 'API/api'

type SetDialogListActionType = {
  type: 'dialogs/SET-DIALOG-LIST'
  payload: { dialogList: DialogType[] }
}
const setDialogList = (dialogList: DialogType[]): SetDialogListActionType => ({
  type: 'dialogs/SET-DIALOG-LIST',
  payload: { dialogList },
})

type SetMessageListActionType = {
  type: 'messages/SET-MESSAGE-LIST'
  payload: { messageList: DialogMessageType[] }
}
const setMessageList = (
  messageList: DialogMessageType[]
): SetMessageListActionType => ({
  type: 'messages/SET-MESSAGE-LIST',
  payload: { messageList },
})

type SetMessageListCurrentPageActionType = {
  type: 'messages/SET-MESSAGE-LIST-CURRENT-PAGE'
  payload: { currentPage: number }
}
const setMessageListCurrentPage = (
  currentPage: number
): SetMessageListCurrentPageActionType => ({
  type: 'messages/SET-MESSAGE-LIST-CURRENT-PAGE',
  payload: { currentPage },
})

type SetMessagesTotalCounActionType = {
  type: 'messages/SET-MESSAGES-TOTAL-COUNT'
  payload: { totalCount: number }
}
const setMessagesTotalCount = (
  totalCount: number
): SetMessagesTotalCounActionType => ({
  type: 'messages/SET-MESSAGES-TOTAL-COUNT',
  payload: { totalCount },
})

export type DialogListActionsType = SetDialogListActionType
export type MessageListActionsType =
  | SetMessageListActionType
  | SetMessageListCurrentPageActionType
export default {
  setDialogList,
  setMessageList,
  setMessageListCurrentPage,
  setMessagesTotalCount,
}
