import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profile-reducer';
import {dialogsReducer} from './reducers/dialogs-reducer';
import {usersReducer} from './reducers/users-reducer';

const reducers = combineReducers({
	usersPage: usersReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);

export type RootStateType = ReturnType<typeof store.getState>;
