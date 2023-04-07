import { UserType } from 'API/api'

type SetUsersActionsType = {
  type: 'users/SET-USERS'
  payload: { userList: UserType[] }
}
const setUsers = (userList: UserType[]): SetUsersActionsType => ({
  type: 'users/SET-USERS',
  payload: { userList },
})

type ToggleFollowActionType = {
  type: 'users/TOGGLE-FOLLOW'
  payload: { userId: number; status: boolean }
}
const toggleFollow = (
  userId: number,
  status: boolean
): ToggleFollowActionType => ({
  type: 'users/TOGGLE-FOLLOW',
  payload: { userId, status },
})

type SetCurrentPageActionType = {
  type: 'users/SET-CURRENT-PAGE'
  payload: { currentPage: number }
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: 'users/SET-CURRENT-PAGE',
  payload: { currentPage },
})

type SetTotalCountActionType = {
  type: 'users/SET-TOTAL-COUNT'
  payload: { totalCount: number }
}
const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
  type: 'users/SET-TOTAL-COUNT',
  payload: { totalCount },
})

export type UsersActionsType =
  | SetCurrentPageActionType
  | SetTotalCountActionType
  | ToggleFollowActionType
  | SetUsersActionsType
export default { setUsers, setCurrentPage, toggleFollow, setTotalCount }
