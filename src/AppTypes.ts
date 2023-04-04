export type NewMessageType = {
  userID: number
  message: string
}
export type PostType = {
  id: string
  title: string
  body: string
}
export type DialogType = {
  userID: number
  messageList: Array<string>
}
export type DialogsType = {
  userList: Array<UserType>
  messageList: Array<DialogType>
}
