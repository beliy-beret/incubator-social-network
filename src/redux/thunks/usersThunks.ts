import { ResponseStatus, usersApi } from 'API/api'
import {
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from '../actions/userPageActions'

import { AppThunkType } from './../_store'
import { appOperations } from 'redux/app'

export const getUsersThunk = (currentPage: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.getUserList(currentPage)
      dispatch(setUsersAC(res.data.items))
      dispatch(setTotalCountAC(res.data.totalCount))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

export const subscribeToUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.subscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(toggleFollowAC(userId, true))
      } else {
        console.error(res.data.messages[0])
      }
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

export const unsubscribeUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.unsubscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(toggleFollowAC(userId, false))
      } else {
        console.error(res.data.messages[0])
        dispatch(appOperations.toggleIsLoading(false))
      }
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}
