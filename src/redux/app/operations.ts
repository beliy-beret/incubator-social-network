import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { authOperations } from 'redux/auth'

const toggleIsLoading = actions.toggleIsLoading
const setAppErrorMessage = actions.setAppErrorMessage
const toggleIsInitialized = actions.toggleIsInitialized

const initializedAppThunk = (): AppThunkType => (dispatch) => {
  try {
    dispatch(authOperations.checkIsAuthThunk())
  } catch (e) {
    dispatch(setAppErrorMessage((e as Error).message))
  } finally {
    dispatch(actions.toggleIsInitialized(true))
  }
}

export default {
  initializedAppThunk,
  toggleIsLoading,
  setAppErrorMessage,
  toggleIsInitialized,
}
