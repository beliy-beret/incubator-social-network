import { UserType } from 'API/api'
import { UsersActionsType } from './actions'

const initialState = {
  userList: [] as UserType[],
  totalCount: 1,
  currentPage: 1,
}

export type UsersInitialStateType = typeof initialState

const reducer = (
  state: UsersInitialStateType = initialState,
  action: UsersActionsType
): UsersInitialStateType => {
  switch (action.type) {
    case 'users/SET-USERS':
      return {
        ...state,
        userList: [...action.payload.userList],
      }
    case 'users/SET-TOTAL-COUNT':
      return {
        ...state,
        totalCount: action.payload.totalCount,
      }
    case 'users/SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    case 'users/TOGGLE-FOLLOW':
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              followed: action.payload.status,
            }
          } else {
            return user
          }
        }),
      }
    default:
      return state
  }
}

export default reducer
