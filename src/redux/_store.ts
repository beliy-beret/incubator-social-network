import {combineReducers, createStore} from "redux";
import {profileReducer} from "./redusers/profile-reducer";
import {dialogsReducer} from "./redusers/dialogs-reducer";
import {usersReducer} from "./redusers/users-reducer";

const reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>;
