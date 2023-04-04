import { AuthActionTypes } from './actions'
import { AuthDataType } from 'API/api'

const initialState = {
  authData: {
    id: null,
    email: '',
    login: '',
  } as AuthDataType,
  isAuth: false,
  captchaUrl: '',
}
export type AuthInitialStateType = typeof initialState

const reducer = (
  state: AuthInitialStateType = initialState,
  action: AuthActionTypes
): AuthInitialStateType => {
  switch (action.type) {
    case 'auth/SET-AUTH-DATA':
      return {
        ...state,
        authData: { ...action.payload.authData },
      }
    case 'auth/DELETE-AUTH-DATA':
      return {
        ...state,
        authData: {} as AuthDataType,
        isAuth: false,
      }
    case 'auth/SET-CAPTCHA-URL':
      return {
        ...state,
        captchaUrl: action.payload.url,
      }
    case 'auth/TOGGLE-IS-AUTH':
      return {
        ...state,
        isAuth: action.payload.isAuth,
      }
    default:
      return state
  }
}

export default reducer
