import { usersOperations, usersSelectors } from 'redux/users'

import { RootStateType } from '../../redux/_store'
import { UserType } from 'API/api'
import { UsersContainer } from './UsersContainer'
import { appSelectors } from 'redux/app'
import { connect } from 'react-redux'

type StatePropsType = {
  userList: Array<UserType>
  currentPage: number
  totalCount: number
  isLoading: boolean
}

type DispatchPropsType = {
  setCurrentPage: (page: number) => void
  getUserList: (currentPage: number) => void
  subscribeToUser: (userId: number) => void
  unsubscribeUser: (userId: number) => void
}

export type UserConnectType = StatePropsType & DispatchPropsType

const mapState = (state: RootStateType): StatePropsType => ({
  userList: usersSelectors.userList(state),
  totalCount: usersSelectors.totalCount(state),
  currentPage: usersSelectors.currentPage(state),
  isLoading: appSelectors.isLoading(state),
})

const mapDispatch = {
  setCurrentPage: (page: number) => usersOperations.setCurrentPage(page),
  getUserList: (currentPage: number) =>
    usersOperations.getUsersThunk(currentPage),
  subscribeToUser: (userId: number) =>
    usersOperations.subscribeToUserThunk(userId),
  unsubscribeUser: (userId: number) =>
    usersOperations.unsubscribeUserThunk(userId),
}

export const UsersConnect = connect(mapState, mapDispatch)(UsersContainer)
