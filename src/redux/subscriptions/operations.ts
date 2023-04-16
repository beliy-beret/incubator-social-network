import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'
import { usersApi } from 'API/api'

const setCurrentPage = actions.setCurrentPage
const toggleFollow = actions.toggleFollow
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

export default { setCurrentPage, toggleFollow, fetchSubscriptions }
