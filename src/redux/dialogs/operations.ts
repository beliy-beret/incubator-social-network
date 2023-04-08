import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { appOperations } from 'redux/app'
import { dialogsApi } from 'API/api'

const setMessageListCurrentPage = actions.setMessageListCurrentPage
const setMessagesTotalCount = actions.setMessagesTotalCount

const fetchDialogList = (): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await dialogsApi.getDialogList()
      if (res.data) {
        dispatch(fetchUserMessageList(res.data[0].id))
        dispatch(actions.setDialogList(res.data))
        dispatch(appOperations.setAppErrorMessage(''))
      }
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const fetchUserMessageList = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await dialogsApi.getMessagesFromUser(userId)
      dispatch(actions.setMessageList(res.data.items))
      dispatch(actions.setActiveDialogId(userId))
      dispatch(appOperations.setAppErrorMessage(''))
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

export default {
  fetchDialogList,
  fetchUserMessageList,
  setMessageListCurrentPage,
  setMessagesTotalCount,
}
