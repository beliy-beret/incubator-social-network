import { RootStateType } from 'redux/_store'

const isLoading = (state: RootStateType) => state.app.isLoading
const isInitialized = (state: RootStateType) => state.app.isInitialized
const errorMessage = (state: RootStateType) => state.app.errorMessage

export default { isLoading, isInitialized, errorMessage }
