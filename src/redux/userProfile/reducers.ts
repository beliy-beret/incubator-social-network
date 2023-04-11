import { UserProfileActionsType } from './actions'
import { UserProfileType } from 'API/api'

const initialState = {
  userProfile: {
    aboutMe: '',
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    userId: null,
    contacts: {},
    photos: {
      small: '',
      large: '',
    },
  } as UserProfileType,
  profileStatus: '',
}

export type UserProfileInitialStateType = typeof initialState

const reducer = (
  state: UserProfileInitialStateType = initialState,
  action: UserProfileActionsType
): UserProfileInitialStateType => {
  switch (action.type) {
    case 'profile/SET-USER-PROFILE':
      return {
        ...state,
        userProfile: { ...action.payload.userProfile },
      }
    case 'profile/SET-PROFILE-STATUS':
      return {
        ...state,
        profileStatus: action.payload.profileStatus,
      }
    case 'profile/SET-PROFILE-PHOTOS':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: {
            ...state.userProfile.photos,
            small: action.payload.photos.small,
            large: action.payload.photos.large,
          },
        },
      }
    default:
      return state
  }
}

export default reducer
