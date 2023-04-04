import { AuthFormDataType, ResponseStatus, authApi } from 'API/api'
import {
  deleteAuthDataAC,
  setAuthDataAC,
  setCaptchaUrlAC,
} from '../actions/authActions'

import { AppThunkType } from './../_store'
import { appOperations } from 'redux/app'
import { setAuthErrorMessageAC } from './../actions/authActions'

export const checkIsAuthThunk = (): AppThunkType => {
  return async (dispatch) => {
    try {
      const res = await authApi.getAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(setAuthDataAC(res.data.data))
        return res.data
      } else {
        throw new Error(res.data.messages[0])
      }
    } catch (e) {
      console.warn(e)
    }
  }
}

export const getCaptchaThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.getCaptcha()
      dispatch(setCaptchaUrlAC(res.data.url))
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

export const deleteAuthDataThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.getAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(deleteAuthDataAC())
      } else {
        throw new Error(res.data.messages[0])
      }
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

export const signInThunk = (formData: AuthFormDataType): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.postAuthorizeData(formData)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(checkIsAuthThunk())
      }
      if (res.data.resultCode === ResponseStatus.ERROR) {
        dispatch(setAuthErrorMessageAC(res.data.messages[0]))
      }
      if (res.data.resultCode === ResponseStatus.CAPTCHA) {
        dispatch(setAuthErrorMessageAC(res.data.messages[0]))
        dispatch(getCaptchaThunk())
      }
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}
