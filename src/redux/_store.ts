import { applyMiddleware, combineReducers, createStore } from 'redux'

import { authReducer } from './reducers/auth-reducer'
import { dialogsReducer } from './reducers/dialogs-reducer'
import { profileReducer } from './reducers/profile-reducer'
import thunk from 'redux-thunk'
import { usersReducer } from './reducers/users-reducer'

const reducers = combineReducers({
  usersPage: usersReducer,
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  auth: authReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
