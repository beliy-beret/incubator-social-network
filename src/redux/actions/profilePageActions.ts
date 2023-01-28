import { UserProfileType } from './../../AppTypes'

export type AddPostActionType = {
  type: 'ADD-POST'
  payload: string
}
export type SetUserProfileType = {
  type: 'SET-USER-PROFILE'
  payload: UserProfileType
}

export const addPostAC = (text: string): AddPostActionType => {
  return { type: 'ADD-POST', payload: text }
}
export const setUserProfileAC = (
  profileInfo: UserProfileType
): SetUserProfileType => {
  return { type: 'SET-USER-PROFILE', payload: profileInfo }
}
