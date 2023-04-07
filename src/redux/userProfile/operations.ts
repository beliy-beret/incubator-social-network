import { AppThunkType } from 'redux/_store'
import { ResponseStatus } from 'API/api'
import { UpdateProfileFormDataType } from 'API/api'
import actions from './actions'
import { appOperations } from 'redux/app'
import { userProfileApi } from 'API/api'

const setUserProfileThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.getProfileData(userId)
      dispatch(actions.setUserProfile(res.data))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

const changeUserProfileThunk = (
  formData: UpdateProfileFormDataType
): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.setProfileData(formData)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(setUserProfileThunk(formData.userId!))
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

const setProfileStatusThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.getProfileStatus(userId)
      dispatch(actions.setProfileStatus(res.data))
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const changeProfileStatusThunk = (status: string): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.setProfileStatus(status)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.setProfileStatus(status))
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

export default {
  setProfileStatusThunk,
  setUserProfileThunk,
  changeProfileStatusThunk,
  changeUserProfileThunk,
}
