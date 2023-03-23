import { AuthFormDataType, ResponseStatus } from '../../AppTypes'
import { checkIsAuth, getCaptcha, signIn } from '../../API/api'
import {
  deleteAuthDataAC,
  setAuthDataAC,
  setCaptchaUrlAC,
} from '../actions/authActions'

import { AppThunkType } from './../_store'
import { setAuthErrorMessageAC } from './../actions/authActions'
import { signOut } from './../../API/api'
import { toggleIsLoadingAC } from '../actions/appActions'

export const checkIsAuthThunk = (): AppThunkType => {
  return (dispatch) => {
    checkIsAuth()
      .then((resp) => {
        if (resp?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(setAuthDataAC(resp.data))
        }
      })
      .catch((e) => console.error(e))
  }
}

export const deleteAuthDataThunk = (): AppThunkType => {
  return (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    signOut()
      .then((resp) => {
        if (resp?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(deleteAuthDataAC())
        }
      })
      .catch((e) => console.error(e))
      .finally(() => dispatch(toggleIsLoadingAC(false)))
  }
}

export const signInThunk = (formData: AuthFormDataType): AppThunkType => {
  return (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    signIn(formData)
      .then((res) => {
        if (res?.resultCode === ResponseStatus.SUCCESS) {
          checkIsAuth().then((res) => {
            if (res?.resultCode === ResponseStatus.SUCCESS) {
              dispatch(setAuthDataAC(res.data))
            }
          })
        }
        if (res?.resultCode === ResponseStatus.ERROR) {
          dispatch(setAuthErrorMessageAC(res.messages[0]))
        }
        if (res?.resultCode === ResponseStatus.CAPTCHA) {
          dispatch(setAuthErrorMessageAC(res.messages[0]))
          getCaptcha().then((res) => dispatch(setCaptchaUrlAC(res?.url!)))
        }
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(toggleIsLoadingAC(false)))
  }
}
