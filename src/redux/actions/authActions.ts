import { AuthDataType } from 'API/api'

export type SetAuthDataActionType = {
  type: 'SET-AUTH-DATA'
  payload: AuthDataType
}
export type DeleteAuthDataActionType = {
  type: 'DELETE-AUTH-DATA'
}
export type SetAuthErrorMessageType = {
  type: 'SET-AUTH-ERROR-MESSAGE'
  payload: string
}
export type SetCaptchaUrlType = {
  type: 'SET-CAPTCHA-URL'
  payload: string
}

export const setAuthDataAC = (
  authData: AuthDataType
): SetAuthDataActionType => {
  return { type: 'SET-AUTH-DATA', payload: authData }
}
export const deleteAuthDataAC = (): DeleteAuthDataActionType => {
  return { type: 'DELETE-AUTH-DATA' }
}
export const setAuthErrorMessageAC = (
  message: string
): SetAuthErrorMessageType => {
  return { type: 'SET-AUTH-ERROR-MESSAGE', payload: message }
}
export const setCaptchaUrlAC = (url: string): SetCaptchaUrlType => {
  return { type: 'SET-CAPTCHA-URL', payload: url }
}
