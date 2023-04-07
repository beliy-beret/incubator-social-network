import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'

import { AppActionsType } from './app/actions'
import { AuthActionTypes } from './auth/actions'
import { UserProfileActionsType } from './userProfile/actions'
import { UsersActionsType } from './users/actions'
import app from 'redux/app/index'
import auth from 'redux/auth/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import userProfile from 'redux/userProfile/index'
import users from 'redux/users/index'

const reducer = combineReducers({
  userProfile,
  auth,
  app,
  users,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

// Types
type ActionsType =
  | AppActionsType
  | AuthActionTypes
  | UserProfileActionsType
  | UsersActionsType
export type RootStateType = ReturnType<typeof store.getState>
export type AppThunkType = ThunkAction<
  void,
  RootStateType,
  unknown,
  ActionsType
>
