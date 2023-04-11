import { PhotoType, UserProfileType } from 'API/api'

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

type SetProfilePhotosActionType = {
  type: 'profile/SET-PROFILE-PHOTOS'
  payload: { photos: PhotoType }
}
const setProfilePhotos = (photos: PhotoType): SetProfilePhotosActionType => ({
  type: 'profile/SET-PROFILE-PHOTOS',
  payload: { photos },
})

export type UserProfileActionsType =
  | SetProfileStatusType
  | SetUserProfileType
  | SetProfilePhotosActionType
export default { setProfileStatus, setUserProfile, setProfilePhotos }
