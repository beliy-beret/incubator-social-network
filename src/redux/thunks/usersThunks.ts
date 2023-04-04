import { ResponseStatus, usersApi } from 'API/api'
import {
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from '../actions/userPageActions'

import { AppThunkType } from './../_store'
import { toggleIsLoadingAC } from '../actions/appActions'

export const getUsersThunk = (currentPage: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await usersApi.getUserList(currentPage)
      dispatch(setUsersAC(res.data.items))
      dispatch(setTotalCountAC(res.data.totalCount))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
    }
  }
}

export const subscribeToUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
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
      setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
    }
  }
}

export const unsubscribeUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    try {
      const res = await usersApi.unsubscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(toggleFollowAC(userId, false))
      } else {
        console.error(res.data.messages[0])
        dispatch(toggleIsLoadingAC(false))
      }
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
    }
  }
}
