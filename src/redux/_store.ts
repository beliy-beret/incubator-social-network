import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'

import { ActionTypes } from './actions/appActions'
import app from 'redux/app/index'
import { authReducer } from './reducers/auth-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { dialogsReducer } from './reducers/dialogs-reducer'
import { profileReducer } from './reducers/profile-reducer'
import { usersReducer } from './reducers/users-reducer'

const reducers = combineReducers({
  usersPage: usersReducer,
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  auth: authReducer,
  app,
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootStateType = ReturnType<typeof store.getState>
export type AppThunkType = ThunkAction<
  void,
  RootStateType,
  unknown,
  ActionTypes
>
