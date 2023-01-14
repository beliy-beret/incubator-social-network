import { ActionTypes } from './../actions/appActions';
import {DialogsType, DialogType} from '../../AppTypes';

type InitialStateType = {
  dialogs: DialogsType
}

const InitialState: InitialStateType = {
	dialogs: {
		userList: [
			{
				id: 1,
				name: 'Andrey',
				status: '',
				followed: false,
				photos: {
					small: null,
					large: null
				},
				uniqueUrlName: ''
			},
			{
				id: 2,
				name: 'Nikita',
				status: '',
				followed: false,
				photos: {
					small: null,
					large: null
				},
				uniqueUrlName: ''
			},
			{
				id: 3,
				name: 'Bob',
				status: '',
				followed: false,
				photos: {
					small: null,
					large: null
				},
				uniqueUrlName: ''
			}
		],
		messageList: [
			{userID: 1, messageList: ['Hello !', 'My name is Andrey']},
			{userID: 2, messageList: ['Hello !', 'My name is Nikita']},
			{userID: 3, messageList: ['Hello !', 'My name is Bob']},
		]
	}
};

export const dialogsReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
	switch (action.type) {
	case 'CREATE-MESSAGE':
		state.dialogs.messageList.forEach((item: DialogType) => {
			if (item.userID === action.payload.userID) {
				item.messageList.push(action.payload.message);
			}
		});
		return state;
	default:
		return state;
	}
};
