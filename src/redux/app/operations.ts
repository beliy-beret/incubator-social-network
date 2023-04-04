import { AppThunkType } from 'redux/_store'
import actions from './actions'
import { checkIsAuthThunk } from 'redux/thunks/authThunk'

const toggleIsLoading = actions.toggleIsLoading
const setAppErrorMessage = actions.setAppErrorMessage

const initializedAppThunk = (): AppThunkType => (dispatch) => {
  try {
    dispatch(checkIsAuthThunk())
    dispatch(actions.toggleIsInitialized(true))
  } catch (e) {
    dispatch(setAppErrorMessage((e as Error).message))
  }
}

export default { initializedAppThunk, toggleIsLoading, setAppErrorMessage }
