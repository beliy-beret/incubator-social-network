import { ResponseStatus, userProfileApi } from 'API/api'

import { AppThunkType } from './../_store'
import { setProfileStatusAC } from './../actions/profilePageActions'
import { setUserProfileAC } from '../actions/profilePageActions'
import { toggleIsLoadingAC } from '../actions/appActions'

export const setUserProfileThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await userProfileApi.getProfileData(userId)
      dispatch(setUserProfileAC(res.data))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
    }
  }
}

export const setProfileStatusThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await userProfileApi.getProfileStatus(userId)
      dispatch(setProfileStatusAC(res.data))
    } catch (e) {
      console.warn(e)
    } finally {
      dispatch(toggleIsLoadingAC(false))
    }
  }
}

export const changeProfileStatusThunk = (status: string): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await userProfileApi.setProfileStatus(status)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(setProfileStatusAC(status))
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
