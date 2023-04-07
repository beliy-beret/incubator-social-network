import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'

import { AppActionsType } from './app/actions'
import { AuthActionTypes } from './auth/actions'
import { UserProfileActionsType } from './userProfile/actions'
import app from 'redux/app/index'
import auth from 'redux/auth/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import userProfile from 'redux/userProfile/index'

const reducer = combineReducers({
  userProfile,
  auth,
  app,
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

// Types

type ActionsType = AppActionsType | AuthActionTypes | UserProfileActionsType
export type RootStateType = ReturnType<typeof store.getState>
export type AppThunkType = ThunkAction<
  void,
  RootStateType,
  unknown,
  ActionsType
>
