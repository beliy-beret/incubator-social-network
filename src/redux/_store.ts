import {combineReducers, createStore} from "redux";
import {profileReducer} from "./redusers/profile-reducer";
import {dialogsReducer} from "./redusers/dialogs-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);
export type StoreType = typeof store
export type RootStateType = ReturnType<typeof store.getState>;
