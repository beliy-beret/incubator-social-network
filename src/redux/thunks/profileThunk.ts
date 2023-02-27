import { DispatchType } from '../_store'
import { getProfileStatus } from './../../API/api'
import { getUserProfile } from '../../API/api'
import { setProfileStatusAC } from './../actions/profilePageActions'
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
      .catch((error) => console.warn(error))
      .finally(() => dispatch(toggleIsLoadingAC(false)))
  }
}

export const setProfileStatusThunk = (userId: number) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    getProfileStatus(userId)
      .then((data) => dispatch(setProfileStatusAC(data!)))
      .catch((error) => console.warn(error))
      .finally(() => dispatch(toggleIsLoadingAC(false)))
  }
}
