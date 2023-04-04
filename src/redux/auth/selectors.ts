import { AuthInitialStateType } from './reducers'

const isAuth = (state: AuthInitialStateType) => state.isAuth
const authData = (state: AuthInitialStateType) => state.authData
const captchaUrl = (state: AuthInitialStateType) => state.captchaUrl

export default { isAuth, authData, captchaUrl }
