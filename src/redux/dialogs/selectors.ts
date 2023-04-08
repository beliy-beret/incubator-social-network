import { RootStateType } from 'redux/_store'

const dialogList = (state: RootStateType) => state.dialogs.dialogList.dialogList
const messageList = (state: RootStateType) =>
  state.dialogs.userMessageList.messageList
const messageListCurrentPage = (state: RootStateType) =>
  state.dialogs.userMessageList.currentPage
const messagesTotalCount = (state: RootStateType) =>
  state.dialogs.userMessageList.totalCount
const activeDialogId = (state: RootStateType) =>
  state.dialogs.dialogList.activeDialogId

export default {
  dialogList,
  messageList,
  messageListCurrentPage,
  messagesTotalCount,
  activeDialogId,
}
