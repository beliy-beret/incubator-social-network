import { ResponseStatus, usersApi } from 'API/api'

import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'
import { usersOperations } from 'redux/users'

const setCurrentPage = actions.setCurrentPage
const fetchSubscriptions = (page: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await usersApi.getUserList(page, true)
      dispatch(actions.setUserList(res.data.items))
      dispatch(actions.setTotalCount(res.data.totalCount))
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}
const unsubscribe = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await dispatch(usersOperations.unsubscribeUserThunk(userId))
      if (res?.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.unsubscribe(userId))
      }
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

export default { setCurrentPage, unsubscribe, fetchSubscriptions }
