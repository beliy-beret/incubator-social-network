import reducer, { AuthInitialStateType } from './reducers'

import { AuthDataType } from 'API/api'
import actions from './actions'

const state: AuthInitialStateType = {
  authData: {
    id: null,
    email: '',
    login: '',
  },
  captchaUrl: '',
  isAuth: false,
}

test('should toggle isAuth', () => {
  const newState = reducer(state, actions.toggleIsAuth(true))
  expect(newState.isAuth).toBeTruthy()
})

test('should set captchaUrl', () => {
  const url = 'some Url'
  const newState = reducer(state, actions.setCaptchaUrl(url))
  expect(newState.captchaUrl).toBe(url)
})

test('should set auth data', () => {
  const data: AuthDataType = {
    id: 2,
    email: 'some email',
    login: 'some login',
  }
  const newState = reducer(state, actions.setAuthData(data))
  expect(newState.authData.email).toEqual(data.email)
  expect(newState.authData.id).toEqual(data.id)
  expect(newState.authData.login).toEqual(data.login)
})
