import { RootStateType } from 'redux/_store'

const isAuth = (state: RootStateType) => state.auth.isAuth
const authUserId = (state: RootStateType) => state.auth.authData.id
const authUserLogin = (state: RootStateType) => state.auth.authData.login
const captchaUrl = (state: RootStateType) => state.auth.captchaUrl

export default { isAuth, authUserId, captchaUrl, authUserLogin }
