import { RootStateType } from 'redux/_store'

const isAuth = (state: RootStateType) => state.auth.isAuth
const authData = (state: RootStateType) => state.auth.authData
const captchaUrl = (state: RootStateType) => state.auth.captchaUrl

export default { isAuth, authData, captchaUrl }
