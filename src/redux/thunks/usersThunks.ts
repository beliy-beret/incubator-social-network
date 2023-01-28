import { getUserList, subscribe, unsubscribe } from '../../API/api'
import {
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from '../actions/userPageActions'

import { DispatchType } from './../_store'
import { ResponseStatus } from '../../AppTypes'
import { toggleIsLoadingAC } from '../actions/appActions'

export const getUsersThunk = (currentPage: number) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    getUserList(currentPage)
      .then((data) => {
        dispatch(setUsersAC(data?.items!))
        dispatch(setTotalCountAC(data?.totalCount!))
        setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
      })
      .catch(() => dispatch(toggleIsLoadingAC(false)))
  }
}

export const subscribeToUserThunk = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    subscribe(userId)
      .then((data) => {
        if (data?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(toggleFollowAC(userId, true))
          setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
        } else {
          console.error(data?.messages[0])
          dispatch(toggleIsLoadingAC(false))
        }
      })
      .catch(() => dispatch(toggleIsLoadingAC(false)))
  }
}

export const unsubscribeUserThunk = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    unsubscribe(userId)
      .then((data) => {
        if (data?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(toggleFollowAC(userId, false))
          setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
        } else {
          console.error(data?.messages[0])
          dispatch(toggleIsLoadingAC(false))
        }
      })
      .catch(() => dispatch(toggleIsLoadingAC(false)))
  }
}
