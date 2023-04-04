import {
  AddPostActionType,
  SetProfileStatusType,
  SetUserProfileType,
} from './profilePageActions'
import {
  DeleteAuthDataActionType,
  SetAuthDataActionType,
  SetAuthErrorMessageType,
  SetCaptchaUrlType,
} from './authActions'
import {
  SetCurrentPageActionType,
  SetTotalCountActionType,
  SetUsersActionsType,
  ToggleFollowActionType,
} from './userPageActions'

import { AppActionsType } from 'redux/app/actions'
import { CreateMessageActionType } from './dialogsPageActions'
import { AuthActionTypes } from 'redux/auth/actions'

export type ActionTypes =
  | AddPostActionType
  | CreateMessageActionType
  | ToggleFollowActionType
  | SetUsersActionsType
  | SetCurrentPageActionType
  | SetTotalCountActionType
  | SetUserProfileType
  | SetAuthDataActionType
  | DeleteAuthDataActionType
  | SetProfileStatusType
  | SetAuthErrorMessageType
  | SetCaptchaUrlType
  | AppActionsType
  | AuthActionTypes
