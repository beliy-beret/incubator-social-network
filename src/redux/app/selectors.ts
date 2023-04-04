import { AppInitialStateType } from './reducers'

const isLoading = (state: AppInitialStateType) => state.isLoading
const isInitialized = (state: AppInitialStateType) => state.isInitialized
const errorMessage = (state: AppInitialStateType) => state.errorMessage

export default { isLoading, isInitialized, errorMessage }
