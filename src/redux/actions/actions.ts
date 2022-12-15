// Dialogs actions
import {UserType} from "../redusers/users-reducer";

export type NewMessageType = {
  userID: number
  message: string
}
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
export type SetUsersActionsTypy = {
  type: 'SET-USERS'
  payload: Array<UserType>
}
export type ToggleFollowActionType = {
  type: 'TOGGLE-FOLLOW'
  payload: number
}
export const toggleFollowAC = (userId: number): ToggleFollowActionType => ({type: 'TOGGLE-FOLLOW', payload: userId});
export const setUsersAC = (userList: Array<UserType>): SetUsersActionsTypy => ({type: 'SET-USERS', payload: userList});


export type ActionTypes = AddPostActionType | CreateMessageActionType | ToggleFollowActionType
