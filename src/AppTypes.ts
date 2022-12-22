export type NewMessageType = {
  userID: number
  message: string
}
export type PostType = {
  id: number
  title: string
  body: string
}
export type DialogType = {
  userID: number,
  messageList: Array<string>
}
export type DialogsType = {
  userList: Array<UserType>
  messageList: Array<DialogType>
}
export type PhotoType = {
  small: string | null
  large: string | null
}
export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: PhotoType
  status: string | null
  followed: boolean
}
