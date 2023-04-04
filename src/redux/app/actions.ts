type ToggleIsLoadingActionType = {
  type: 'app/TOGGLE-IS-LOADING'
  payload: { isLoading: boolean }
}
const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingActionType => ({
  type: 'app/TOGGLE-IS-LOADING',
  payload: { isLoading },
})

type ToggleIsInitializedActionType = {
  type: 'app/TOGGLE-IS-INITIALIZED'
  payload: { isInitialized: boolean }
}
const toggleIsInitialized = (
  isInitialized: boolean
): ToggleIsInitializedActionType => ({
  type: 'app/TOGGLE-IS-INITIALIZED',
  payload: { isInitialized },
})

type SetAppErrorMessageActionType = {
  type: 'app/SET-APP-ERROR-MESSAGE'
  payload: { message: string }
}
const setAppErrorMessage = (message: string): SetAppErrorMessageActionType => ({
  type: 'app/SET-APP-ERROR-MESSAGE',
  payload: { message },
})

export type AppActionsType =
  | ToggleIsInitializedActionType
  | ToggleIsLoadingActionType
  | SetAppErrorMessageActionType
export default {
  toggleIsLoading,
  toggleIsInitialized,
  setAppErrorMessage,
}
