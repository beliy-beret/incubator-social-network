import { UserProfileType } from 'API/api'

type SetUserProfileType = {
  type: 'profile/SET-USER-PROFILE'
  payload: UserProfileType
}
const setUserProfile = (profileInfo: UserProfileType): SetUserProfileType => {
  return { type: 'profile/SET-USER-PROFILE', payload: profileInfo }
}

type SetProfileStatusType = {
  type: 'profile/SET-PROFILE-STATUS'
  payload: string
}
const setProfileStatus = (status: string): SetProfileStatusType => {
  return {
    type: 'profile/SET-PROFILE-STATUS',
    payload: status,
  }
}

export type UserProfileActionsType = SetProfileStatusType | SetUserProfileType
export default { setProfileStatus, setUserProfile }
