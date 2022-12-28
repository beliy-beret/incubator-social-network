import {NewMessageType, UserType} from "../../AppTypes";

// Dialogs actions
export type CreateMessageActionType = {
  type: 'CREATE-MESSAGE'
  payload: NewMessageType
}
export const createMessageAC = ({userID, message}: NewMessageType): CreateMessageActionType => {
  return {type: "CREATE-MESSAGE", payload: {userID, message}}
}


// Profile actions
export type AddPostActionType = {
  type: 'ADD-POST'
  payload: string
};
export const addPostAC = (text: string): AddPostActionType => {
  return {type: 'ADD-POST', payload: text}
}


// Users actions
export type SetUsersActionsType = {
  type: 'SET-USERS'
  payload: Array<UserType>
}
export type ToggleFollowActionType = {
  type: 'TOGGLE-FOLLOW'
  payload: {userId: number, status: boolean}
}
export type SetCurrentPageActionType = {
  type: 'SET-CURRENT-PAGE',
  payload: number
}
export type SetTotalCountActionType = {
  type: 'SET-TOTAL-COUNT',
  payload: number
}
export const toggleFollowAC = (userId: number, status: boolean): ToggleFollowActionType => ({type: 'TOGGLE-FOLLOW', payload: {userId, status}});
export const setUsersAC = (userList: Array<UserType>): SetUsersActionsType => ({type: 'SET-USERS', payload: userList});
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType => ({type: "SET-CURRENT-PAGE", payload: pageNumber});
export const setTotalCountAC = (count: number): SetTotalCountActionType => ({type: "SET-TOTAL-COUNT", payload: count});

export type ActionTypes = AddPostActionType |
  CreateMessageActionType |
  ToggleFollowActionType |
  SetUsersActionsType |
  SetCurrentPageActionType |
  SetTotalCountActionType
