import { AuthFormDataType, ResponseStatus } from '../../AppTypes'
import { checkIsAuth, signIn } from '../../API/api'
import { deleteAuthDataAC, setAuthDataAC } from '../actions/authActions'

import { DispatchType } from '../_store'
import { signOut } from './../../API/api'
import { toggleIsLoadingAC } from '../actions/appActions'

export const checkIsAuthThunk = () => {
  return (dispatch: DispatchType) => {
    checkIsAuth()
      .then((resp) => {
        if (resp?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(setAuthDataAC(resp.data))
        }
      })
      .catch((e) => console.error(e))
  }
}

export const deleteAuthDataThunk = () => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    signOut()
      .then((resp) => {
        if (resp?.resultCode === ResponseStatus.SUCCESS) {
          dispatch(deleteAuthDataAC())
          dispatch(toggleIsLoadingAC(false))
        }
      })
      .catch((e) => {
        console.error(e)
        dispatch(toggleIsLoadingAC(false))
      })
  }
}

export const signInThunk = (formData: AuthFormDataType) => {
  return (dispatch: DispatchType) => {
    dispatch(toggleIsLoadingAC(true))
    signIn(formData).then((data) => {
      if (data?.resultCode === ResponseStatus.SUCCESS) {
        checkIsAuthThunk()
      }
    })
  }
}
