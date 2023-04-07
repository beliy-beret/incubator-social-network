import { ResponseStatus, usersApi } from 'API/api'

import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'

const setCurrentPage = actions.setCurrentPage

const getUsersThunk = (currentPage: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.getUserList(currentPage)
      dispatch(actions.setUsers(res.data.items))
      dispatch(actions.setTotalCount(res.data.totalCount))
    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

const subscribeToUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.subscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.toggleFollow(userId, true))
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

const unsubscribeUserThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.unsubscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.toggleFollow(userId, false))
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

export default {
  setCurrentPage,
  unsubscribeUserThunk,
  subscribeToUserThunk,
  getUsersThunk,
}
