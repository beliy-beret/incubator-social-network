import {
  getUsersThunk,
  subscribeToUserThunk,
  unsubscribeUserThunk,
} from '../../redux/thunks/usersThunks'

import { RootStateType } from '../../redux/_store'
import { UserType } from '../../AppTypes'
import { UsersContainer } from './UsersContainer'
import { connect } from 'react-redux'
import { setCurrentPageAC } from '../../redux/actions/userPageActions'

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
  userList: state.usersPage.userList,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
})

const mapDispatch = {
  setCurrentPage: (page: number) => setCurrentPageAC(page),
  getUserList: (currentPage: number) => getUsersThunk(currentPage),
  subscribeToUser: (userId: number) => subscribeToUserThunk(userId),
  unsubscribeUser: (userId: number) => unsubscribeUserThunk(userId),
}

export const UsersConnect = connect(mapState, mapDispatch)(UsersContainer)
