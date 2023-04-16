import { SubscriptionsActionsType } from './actions'
import { UserType } from 'API/api'

const initialState = {
  userList: [] as UserType[],
  totalCount: 1,
  currentPage: 1,
}

export type UsersInitialStateType = typeof initialState

const reducer = (
  state: UsersInitialStateType = initialState,
  action: SubscriptionsActionsType
): UsersInitialStateType => {
  switch (action.type) {
    case 'subscriptions/SET-USER-LIST':
      return {
        ...state,
        userList: action.payload.userList,
      }
    case 'subscriptions/SET-TOTAL-COUNT':
      return {
        ...state,
        totalCount: action.payload.totalCount,
      }
    case 'subscriptions/SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    case 'subscriptions/UNSUBSCRIBE':
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.id !== action.payload.userId
        ),
      }
    default:
      return state
  }
}

export default reducer
