import { ResponseStatus, ResponseType, usersApi } from 'API/api'

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

const unsubscribeUserThunk = (
  userId: number
): AppThunkType<Promise<ResponseType<object> | undefined>> => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.unsubscribe(userId)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.toggleFollow(userId, false))
        return res.data
      } else {
        console.error(res.data.messages[0])
        dispatch(appOperations.toggleIsLoading(false))
        dispatch(appOperations.setAppErrorMessage(res.data.messages[0]))
        return res.data
      }
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
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
