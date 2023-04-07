import { AuthFormDataType, ResponseStatus, authApi } from 'API/api'

import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'

const checkIsAuthThunk = (): AppThunkType => {
  return async (dispatch) => {
    try {
      const res = await authApi.getAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.setAuthData(res.data.data))
        dispatch(actions.toggleIsAuth(true))
        return res.data
      } else {
        throw new Error(res.data.messages[0])
      }
    } catch (e) {
      console.warn(e)
    }
  }
}

const deleteAuthDataThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.getAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.deleteAuthData())
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

const postAuthorizationDataThunk = (
  formData: AuthFormDataType
): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.postAuthorizeData(formData)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(checkIsAuthThunk())
      }
      if (res.data.resultCode === ResponseStatus.ERROR) {
        dispatch(appOperations.setAppErrorMessage(res.data.messages[0]))
      }
      if (res.data.resultCode === ResponseStatus.CAPTCHA) {
        dispatch(appOperations.setAppErrorMessage(res.data.messages[0]))
        dispatch(getCaptchaThunk())
      }
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const getCaptchaThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.getCaptcha()
      dispatch(actions.setCaptchaUrl(res.data.url))
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

export default {
  checkIsAuthThunk,
  getCaptchaThunk,
  postAuthorizationDataThunk,
  deleteAuthDataThunk,
}
