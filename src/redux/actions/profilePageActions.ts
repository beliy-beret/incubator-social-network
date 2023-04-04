import { UserProfileType } from 'API/api'

export type AddPostActionType = {
  type: 'ADD-POST'
  payload: string
}
export type SetUserProfileType = {
  type: 'SET-USER-PROFILE'
  payload: UserProfileType
}

export type SetProfileStatusType = {
  type: 'SET-PROFILE-STATUS'
  payload: string
}

export const addPostAC = (text: string): AddPostActionType => {
  return { type: 'ADD-POST', payload: text }
}
export const setUserProfileAC = (
  profileInfo: UserProfileType
): SetUserProfileType => {
  return { type: 'SET-USER-PROFILE', payload: profileInfo }
}
export const setProfileStatusAC = (status: string): SetProfileStatusType => {
  return {
    type: 'SET-PROFILE-STATUS',
    payload: status,
  }
}
