import { RootStateType } from 'redux/_store'

const profile = (state: RootStateType) => state.userProfile.userProfile
const profileStatus = (state: RootStateType) => state.userProfile.profileStatus

export default { profile, profileStatus }
