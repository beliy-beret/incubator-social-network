import {
  setAppErrorMessageAC,
  toggleIsInitializedAC,
} from './../actions/appActions'

import { AppThunkType } from './../_store'
import { checkIsAuthThunk } from './authThunk'

export const initAppThunk = (): AppThunkType => {
  return (dispatch) => {
    try {
      dispatch(checkIsAuthThunk())
      dispatch(toggleIsInitializedAC(true))
    } catch (e) {
      dispatch(setAppErrorMessageAC((e as Error).message))
    }
  }
}
