import { ActionTypes } from './../actions/appActions'

type InitialStateType = {
  isInitialized: boolean
  errorMessage: string
}

const InitialState: InitialStateType = {
  isInitialized: false,
  errorMessage: '',
}

export const appReducer = (
  state: InitialStateType = InitialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'TOGGLE-IS-INITIALIZED':
      return {
        ...state,
        isInitialized: action.payload,
      }
    case 'SET-APP-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}
