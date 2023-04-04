import { AuthFormDataType, ResponseStatus, authApi } from 'API/api'
import {
  deleteAuthDataAC,
  setAuthDataAC,
  setCaptchaUrlAC,
} from '../actions/authActions'

import { AppThunkType } from './../_store'
import { setAuthErrorMessageAC } from './../actions/authActions'
import { toggleIsLoadingAC } from '../actions/appActions'

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
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await authApi.getCaptcha()
      dispatch(setCaptchaUrlAC(res.data.url))
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }
}

export const deleteAuthDataThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
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
      dispatch(toggleIsLoadingAC(false))
    }
  }
}

export const signInThunk = (formData: AuthFormDataType): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await authApi.postAuthorizeData(formData)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(setAuthDataAC(res.data.data))
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
      dispatch(toggleIsLoadingAC(false))
    }
  }
}
