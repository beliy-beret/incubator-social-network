import { AuthFormDataType, ResponseStatus, authApi } from 'API/api'

import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'
import { dialogsOperations } from 'redux/dialogs'
import { userProfileOperations } from 'redux/userProfile'

const checkIsAuthThunk = (): AppThunkType => {
  return async (dispatch) => {
    try {
      const res = await authApi.getAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.setAuthData(res.data.data))
        dispatch(actions.toggleIsAuth(true))
      } else {
        dispatch(appOperations.setAppErrorMessage(res.data.messages[0]))
      }
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    }
  }
}

const deleteAuthDataThunk = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await authApi.deleteAuthData()
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.deleteAuthData())
        dispatch(dialogsOperations.setActiveDialogId(null))
        dispatch(dialogsOperations.deleteDialogList())
        dispatch(dialogsOperations.deleteMessageList())
        dispatch(dialogsOperations.setMessageListCurrentPage(1))
        dispatch(userProfileOperations.deleteProfileData())
        dispatch(userProfileOperations.deleteProfileStatus())
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
        dispatch(appOperations.setAppErrorMessage(''))
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
