import { AuthDataType } from './../../AppTypes'

export type SetAuthDataActionType = {
  type: 'SET-AUTH-DATA'
  payload: AuthDataType
}
export type DeleteAuthDataActionType = {
  type: 'DELETE-AUTH-DATA'
}

export const setAuthDataAC = (
  authData: AuthDataType
): SetAuthDataActionType => {
  return { type: 'SET-AUTH-DATA', payload: authData }
}
export const deleteAuthDataAC = (): DeleteAuthDataActionType => {
  return { type: 'DELETE-AUTH-DATA' }
}
