import { RootStateType } from 'redux/_store'

const profile = (state: RootStateType) => state.userProfile.userProfile
const profileStatus = (state: RootStateType) => state.userProfile.profileStatus
const profilePhoto = (state: RootStateType) =>
  state.userProfile.userProfile.photos.large
export default { profile, profileStatus, profilePhoto }
