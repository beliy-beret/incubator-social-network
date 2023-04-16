import { UserType } from 'API/api'

type SetUserListActionType = {
  type: 'subscriptions/SET-USER-LIST'
  payload: { userList: UserType[] }
}
const setUserList = (userList: UserType[]): SetUserListActionType => ({
  type: 'subscriptions/SET-USER-LIST',
  payload: { userList },
})

type ToggleFollowActionType = {
  type: 'subscriptions/UNSUBSCRIBE'
  payload: { userId: number }
}
const unsubscribe = (userId: number): ToggleFollowActionType => ({
  type: 'subscriptions/UNSUBSCRIBE',
  payload: { userId },
})

type SetCurrentPageActionType = {
  type: 'subscriptions/SET-CURRENT-PAGE'
  payload: { currentPage: number }
}
const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: 'subscriptions/SET-CURRENT-PAGE',
  payload: { currentPage },
})

type SetTotalCountActionType = {
  type: 'subscriptions/SET-TOTAL-COUNT'
  payload: { totalCount: number }
}
const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
  type: 'subscriptions/SET-TOTAL-COUNT',
  payload: { totalCount },
})

export type SubscriptionsActionsType =
  | SetUserListActionType
  | ToggleFollowActionType
  | SetCurrentPageActionType
  | SetTotalCountActionType

export default { setUserList, setTotalCount, setCurrentPage, unsubscribe }
