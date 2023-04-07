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

type UserProfileInitialStateType = typeof initialState

const reducer = (
  state: UserProfileInitialStateType = initialState,
  action: UserProfileActionsType
) => {
  switch (action.type) {
    case 'profile/SET-USER-PROFILE':
      return {
        ...state,
        userProfile: { ...action.payload },
      }
    case 'profile/SET-PROFILE-STATUS':
      return {
        ...state,
        profileStatus: action.payload,
      }
    default:
      return state
  }
}

export default reducer
