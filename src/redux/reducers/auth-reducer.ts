import { ActionTypes } from './../actions/appActions'
import { AuthDataType } from 'API/api'

type InitialStateType = {
  authData: AuthDataType | Record<string, never>
  isAuth: boolean
  errorMessage: string
  captchaUrl: string
  isLoading: boolean
}

const InitialState: InitialStateType = {
  authData: {
    id: null,
    email: '',
    login: '',
  },
  isAuth: false,
  errorMessage: '',
  captchaUrl: '',
  isLoading: false,
}

export const authReducer = (
  state: InitialStateType = InitialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'SET-AUTH-DATA':
      return { ...state, authData: { ...action.payload }, isAuth: true }
    case 'DELETE-AUTH-DATA':
      return {
        ...state,
        authData: {},
        isAuth: false,
      }
    case 'SET-AUTH-ERROR-MESSAGE':
      return { ...state, errorMessage: action.payload }
    case 'SET-CAPTCHA-URL':
      return {
        ...state,
        captchaUrl: action.payload,
      }
    case 'TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}
