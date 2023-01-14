import {ActionTypes} from '../actions/actions';
import {UserType} from '../../AppTypes';

type InitialStateType = {
  userList: Array<UserType>
  totalCount: number
  currentPage: number
  isLoading: boolean
}

const InitialState: InitialStateType = {
	userList: [],
	totalCount: 1,
	currentPage: 1,
	isLoading: false
};

export const usersReducer = (
	state: InitialStateType = InitialState,
	action: ActionTypes
) => {
	switch (action.type) {
	case 'SET-USERS':
		return {
			...state,
			userList: [...action.payload]
		};
	case 'SET-TOTAL-COUNT':
		return {
			...state,
			totalCount: action.payload
		};
	case 'SET-CURRENT-PAGE':
		return {
			...state,
			currentPage: action.payload
		};
	case 'TOGGLE-FOLLOW':
		return {
			...state,
			userList: state.userList.map((user) => {
				if (user.id === action.payload.userId) {
					return {
						...user,
						followed: action.payload.status
					};
				} else {
					return user;
				}
			})
		};
	case 'TOGGLE-IS-LOADING':
		return{
			...state,
			isLoading: action.payload	
		};
	default:
		return state;
	}
};
