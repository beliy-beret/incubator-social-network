import { PostType, UserProfileType } from '../../AppTypes'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { FC } from 'react'
import { Profile } from './Profile'
import { RootStateType } from '../../redux/_store'
import { addPostAC } from '../../redux/actions/profilePageActions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setUserProfileThunk } from '../../redux/thunks/profileThunk'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

type PropType = {
  postList: Array<PostType>
  userProfile: UserProfileType
  isLoading: boolean
}

type MapDispatchType = {
  addPost: (text: string) => void
  setUserProfile: (userId: number) => void
}

export type ProfilePageConnectType = PropType &
  MapDispatchType &
  RouteComponentProps<{ id: string }>

const mapState = (state: RootStateType): PropType => ({
  ...state.profilePage,
})
const mapDispatch = {
  addPost: (text: string) => addPostAC(text),
  setUserProfile: (userId: number) => setUserProfileThunk(userId),
}

export const ProfileContainer = compose<FC>(
  connect(mapState, mapDispatch),
  withRouter,
  withAuthRedirect
)(Profile)
