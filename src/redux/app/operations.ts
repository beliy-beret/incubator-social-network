import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { authOperations } from 'redux/auth'

const toggleIsLoading = actions.toggleIsLoading
const setAppErrorMessage = actions.setAppErrorMessage

const initializedAppThunk = (): AppThunkType => (dispatch) => {
  try {
    dispatch(authOperations.checkIsAuthThunk())
    dispatch(actions.toggleIsInitialized(true))
  } catch (e) {
    dispatch(setAppErrorMessage((e as Error).message))
  }
}

export default { initializedAppThunk, toggleIsLoading, setAppErrorMessage }
