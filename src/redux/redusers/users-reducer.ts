import {
  SetCurrentPageActionType,
  SetTotalCountActionType, SetUsersActionsType,
  ToggleFollowActionType
} from "../actions/actions";
import {UserType} from "../../AppTypes";

type InitialStateType = {
  userList: Array<UserType>
  totalCount: number
  currentPage: number
}

const InitialState: InitialStateType = {
  userList: [],
  totalCount: 1,
  currentPage: 1,
}

export const usersReducer = (
  state: InitialStateType = InitialState,
  action: ToggleFollowActionType |
    SetTotalCountActionType |
    SetCurrentPageActionType |
    SetUsersActionsType
) => {
  switch (action.type) {
    case 'SET-USERS':
      return {
        ...state,
        userList: [...state.userList, ...action.payload]
      };
    case 'SET-TOTAL-COUNT':
      return {
        ...state,
        totalCount: action.payload
      };
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    case 'TOGGLE-FOLLOW':
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: !user.followed
            }
          } else {
            return user
          }
        })
      };
    default:
      return state;
  }
}
