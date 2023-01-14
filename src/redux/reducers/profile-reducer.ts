import { UserProfileType } from './../../AppTypes';
import { ActionTypes } from './../actions/appActions';
import { PostType } from '../../AppTypes';
import { v1 } from 'uuid';

type InitialStateType = {
	postList: Array<PostType>
	userProfile: UserProfileType
	isLoading: boolean
};

const InitialState: InitialStateType = {
	isLoading: false,
	userProfile: {
		aboutMe: '',
		fullName: '',
		lookingForAJob: false,
		lookingForAJobDescription: '',
		userId: 0,
		contacts: {},
		photos: {
			small: '',
			large: ''
		}
	},
	postList: [
		{
			id: '1',
			title: '1st Post',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicated memo neale officiate,' +
				' rebut temporisers! Adipisci amet consectetur, dolores et lilos piste parvati perspiciatis quam repudiate' +
				' secur, tempore voluptuous!',
		}
	],

};

export const profileReducer = (state: InitialStateType = InitialState, action: ActionTypes) => {
	const newPost: PostType = {
		id: v1(),
		body: 'It\'s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.',
		title: 'first post'
	};
	switch (action.type) {
		case 'ADD-POST':
			return ({
				...state,
				postList: [newPost, ...state.postList]
			});
		case 'TOGGLE-IS-LOADING':
			return ({
				...state,
				isLoading: action.payload
			});
		case 'SET-USER-PROFILE':
			return({
				...state,
				userProfile: {...action.payload}
			});		
		default:
			return state;
	}
};
