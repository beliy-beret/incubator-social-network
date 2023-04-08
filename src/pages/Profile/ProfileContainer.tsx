import { RouteComponentProps, withRouter } from 'react-router-dom'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { FC } from 'react'
import { Profile } from './Profile'
import { RootStateType } from '../../redux/_store'
import { UserProfileType } from 'API/api'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

type PropType = {
  authUserId: number | null
  userProfile: UserProfileType
  isLoading: boolean
  profileStatus: string
}

type MapDispatchType = {
  setUserProfile: (userId: number) => void
}

export type ProfilePageConnectType = PropType &
  MapDispatchType &
  RouteComponentProps<{ id: string }>

const mapState = (state: RootStateType): PropType => ({
  userProfile: userProfileSelectors.profile(state),
  profileStatus: userProfileSelectors.profileStatus(state),
  authUserId: authSelectors.authData(state).id,
  isLoading: appSelectors.isLoading(state),
})
const mapDispatch = {
  setUserProfile: (userId: number) =>
    userProfileOperations.setUserProfileThunk(userId),
}

export const ProfileContainer = compose<FC>(
  connect(mapState, mapDispatch),
  withRouter,
  withAuthRedirect
)(Profile)
