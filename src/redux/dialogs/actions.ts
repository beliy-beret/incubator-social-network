import { DialogMessageType, DialogType } from 'API/api'

type SetDialogListActionType = {
  type: 'dialogs/SET-DIALOG-LIST'
  payload: { dialogList: DialogType[] }
}
const setDialogList = (dialogList: DialogType[]): SetDialogListActionType => ({
  type: 'dialogs/SET-DIALOG-LIST',
  payload: { dialogList },
})

type SetActiveDialogIdActionType = {
  type: 'dialogs/SET-ACTIVE-DIALOG-INDEX'
  payload: { dialogId: number | null }
}
const setActiveDialogId = (
  dialogId: number | null
): SetActiveDialogIdActionType => ({
  type: 'dialogs/SET-ACTIVE-DIALOG-INDEX',
  payload: { dialogId },
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

type SetMessagesTotalCountActionType = {
  type: 'messages/SET-MESSAGES-TOTAL-COUNT'
  payload: { totalCount: number }
}
const setMessagesTotalCount = (
  totalCount: number
): SetMessagesTotalCountActionType => ({
  type: 'messages/SET-MESSAGES-TOTAL-COUNT',
  payload: { totalCount },
})

type SetMessageToMessageListActionType = {
  type: 'messages/SET-MESSAGE-TO-MESSAGE-LIST'
  payload: { message: DialogMessageType }
}
const setMessageToMessageList = (
  message: DialogMessageType
): SetMessageToMessageListActionType => ({
  type: 'messages/SET-MESSAGE-TO-MESSAGE-LIST',
  payload: { message },
})

export type DialogListActionsType =
  | SetDialogListActionType
  | SetActiveDialogIdActionType
export type MessageListActionsType =
  | SetMessageListActionType
  | SetMessageListCurrentPageActionType
  | SetMessagesTotalCountActionType
  | SetMessageToMessageListActionType
export default {
  setDialogList,
  setActiveDialogId,
  setMessageList,
  setMessageListCurrentPage,
  setMessagesTotalCount,
  setMessageToMessageList,
}
