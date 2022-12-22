import {ActionTypes} from "../actions/actions";
import {UserType} from "../../AppTypes";

type InitialStateType = Array<UserType>

const initialState: InitialStateType = []

export const usersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "TOGGLE-FOLLOW":
      return state.map(user => {
        if(user.id === action.payload){
          return {...user, isFollow: !user.followed}
        }
        return user;
      })
    case 'SET-USERS':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
