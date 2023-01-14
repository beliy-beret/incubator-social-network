import { ToggleFollowActionType, SetUsersActionsType, SetCurrentPageActionType, SetTotalCountActionType } from './userPageActions';
import { CreateMessageActionType } from './dialogsPageActions';
import { AddPostActionType, SetUserProfileType } from './profilePageActions';

export type ActionTypes = AddPostActionType |
  CreateMessageActionType |
  ToggleFollowActionType |
  SetUsersActionsType |
  SetCurrentPageActionType |
  SetTotalCountActionType |
  ToggleIsLoadingActionType |
  SetUserProfileType

export type ToggleIsLoadingActionType = {
  type: 'TOGGLE-IS-LOADING',
  payload: boolean
}

export const toggleIsLoadingAC = (isLoading: boolean): ToggleIsLoadingActionType => ({type: 'TOGGLE-IS-LOADING', payload: isLoading});
