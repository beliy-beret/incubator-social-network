import { AuthDataType } from 'API/api'

type SetAuthDataActionType = {
  type: 'auth/SET-AUTH-DATA'
  payload: { authData: AuthDataType }
}
const setAuthData = (authData: AuthDataType): SetAuthDataActionType => {
  return { type: 'auth/SET-AUTH-DATA', payload: { authData } }
}

type DeleteAuthDataActionType = {
  type: 'auth/DELETE-AUTH-DATA'
}
const deleteAuthData = (): DeleteAuthDataActionType => {
  return { type: 'auth/DELETE-AUTH-DATA' }
}

type SetCaptchaUrlType = {
  type: 'auth/SET-CAPTCHA-URL'
  payload: { url: string }
}
const setCaptchaUrl = (url: string): SetCaptchaUrlType => {
  return { type: 'auth/SET-CAPTCHA-URL', payload: { url } }
}

type ToggleIsAuthActionType = {
  type: 'auth/TOGGLE-IS-AUTH'
  payload: { isAuth: boolean }
}
const toggleIsAuth = (isAuth: boolean): ToggleIsAuthActionType => {
  return { type: 'auth/TOGGLE-IS-AUTH', payload: { isAuth } }
}

export type AuthActionTypes =
  | SetAuthDataActionType
  | DeleteAuthDataActionType
  | SetCaptchaUrlType
  | ToggleIsAuthActionType
export default { setAuthData, deleteAuthData, setCaptchaUrl, toggleIsAuth }
