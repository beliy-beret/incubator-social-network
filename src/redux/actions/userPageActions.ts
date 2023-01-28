import { UserType } from '../../AppTypes'

export type SetUsersActionsType = {
  type: 'SET-USERS'
  payload: Array<UserType>
}
export type ToggleFollowActionType = {
  type: 'TOGGLE-FOLLOW'
  payload: { userId: number; status: boolean }
}
export type SetCurrentPageActionType = {
  type: 'SET-CURRENT-PAGE'
  payload: number
}
export type SetTotalCountActionType = {
  type: 'SET-TOTAL-COUNT'
  payload: number
}

export const toggleFollowAC = (
  userId: number,
  status: boolean
): ToggleFollowActionType => ({
  type: 'TOGGLE-FOLLOW',
  payload: { userId, status },
})
export const setUsersAC = (userList: Array<UserType>): SetUsersActionsType => ({
  type: 'SET-USERS',
  payload: userList,
})
export const setCurrentPageAC = (
  pageNumber: number
): SetCurrentPageActionType => ({
  type: 'SET-CURRENT-PAGE',
  payload: pageNumber,
})
export const setTotalCountAC = (count: number): SetTotalCountActionType => ({
  type: 'SET-TOTAL-COUNT',
  payload: count,
})
