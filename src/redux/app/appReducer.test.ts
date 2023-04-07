import reducer, { AppInitialStateType } from './reducers'

import actions from './actions'

const state: AppInitialStateType = {
  isLoading: false,
  isInitialized: false,
  errorMessage: '',
}

test('should toggle isLoading', () => {
  const newState = reducer(state, actions.toggleIsLoading(true))
  expect(newState.isLoading).toBeTruthy()
})

test('should toggle isInitialized', () => {
  const newState = reducer(state, actions.toggleIsInitialized(true))
  expect(newState.isInitialized).toBeTruthy()
})

test('should set error message', () => {
  const errorMessage = 'Some text'
  const newState = reducer(state, actions.setAppErrorMessage(errorMessage))
  expect(newState.errorMessage).toBe(errorMessage)
})
