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
export type ContactsType = {[key:string]: string | null}
export type UserProfileType = {
  'aboutMe': string
  'contacts': ContactsType
  'lookingForAJob': boolean
  'lookingForAJobDescription': string
  'fullName': string
  'userId': number | null
  'photos': PhotoType
}
export type AuthDataType = {
  id: number | null
  email: string
  login: string
}

export enum ResponseStatus {
  'SUCCESS' = 0,
  'ERROR' = 1,
  'CAPTCHA-REQUIRE' = 10
}