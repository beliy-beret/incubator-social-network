import { UserProfileType } from 'API/api'

type SetUserProfileType = {
  type: 'profile/SET-USER-PROFILE'
  payload: { userProfile: UserProfileType }
}
const setUserProfile = (userProfile: UserProfileType): SetUserProfileType => {
  return { type: 'profile/SET-USER-PROFILE', payload: { userProfile } }
}

type SetProfileStatusType = {
  type: 'profile/SET-PROFILE-STATUS'
  payload: { profileStatus: string }
}
const setProfileStatus = (profileStatus: string): SetProfileStatusType => {
  return {
    type: 'profile/SET-PROFILE-STATUS',
    payload: { profileStatus },
  }
}

export type UserProfileActionsType = SetProfileStatusType | SetUserProfileType
export default { setProfileStatus, setUserProfile }
