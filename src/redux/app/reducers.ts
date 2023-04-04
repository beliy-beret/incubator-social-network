import { AppActionsType } from './actions'

const initialState = {
  isInitialized: false,
  errorMessage: '',
  isLoading: false,
}

export type AppInitialStateType = typeof initialState

const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionsType
): AppInitialStateType => {
  switch (action.type) {
    case 'app/TOGGLE-IS-INITIALIZED':
      return {
        ...state,
        isInitialized: action.payload.isInitialized,
      }
    case 'app/SET-APP-ERROR-MESSAGE':
      return {
        ...state,
        errorMessage: action.payload.message,
      }
    case 'app/TOGGLE-IS-LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    default:
      return state
  }
}

export default reducer
