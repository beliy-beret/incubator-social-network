import { profileReducer } from './reducers/profile-reducer';
import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './reducers/dialogs-reducer';
import {usersReducer} from './reducers/users-reducer';

const reducers = combineReducers({
	usersPage: usersReducer,	
	dialogsPage: dialogsReducer,
	profilePage: profileReducer
});

export const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>;
