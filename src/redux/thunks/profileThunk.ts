import { DispatchType } from '../_store'
import { getUserProfile } from '../../API/api'
import { setUserProfileAC } from '../actions/profilePageActions'
import { toggleIsLoadingAC } from '../actions/appActions'

export const setUserProfileThunk = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfileAC(data!))
        setTimeout(() => dispatch(toggleIsLoadingAC(false)), 300)
      })
      .catch(() => dispatch(toggleIsLoadingAC(false)))
  }
}
