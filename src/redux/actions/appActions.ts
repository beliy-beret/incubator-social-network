import {
  AddPostActionType,
  SetProfileStatusType,
  SetUserProfileType,
} from './profilePageActions'
import { DeleteAuthDataActionType, SetAuthDataActionType } from './authActions'
import {
  SetCurrentPageActionType,
  SetTotalCountActionType,
  SetUsersActionsType,
  ToggleFollowActionType,
} from './userPageActions'

import { CreateMessageActionType } from './dialogsPageActions'

export type ActionTypes =
  | AddPostActionType
  | CreateMessageActionType
  | ToggleFollowActionType
  | SetUsersActionsType
  | SetCurrentPageActionType
  | SetTotalCountActionType
  | ToggleIsLoadingActionType
  | SetUserProfileType
  | SetAuthDataActionType
  | DeleteAuthDataActionType
  | SetProfileStatusType

export type ToggleIsLoadingActionType = {
  type: 'TOGGLE-IS-LOADING'
  payload: boolean
}

export const toggleIsLoadingAC = (
  isLoading: boolean
): ToggleIsLoadingActionType => ({
  type: 'TOGGLE-IS-LOADING',
  payload: isLoading,
})
