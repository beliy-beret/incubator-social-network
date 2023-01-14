import { v1 } from 'uuid';
import { PostType } from '../../AppTypes';
import {AddPostActionType} from '../actions/actions';

type InitialStateType = {
	postList: Array<PostType>
};

const InitialState = {
	postList: [
		{
			id: '1',
			title: '1st Post',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
		},
		{
			id: '2',
			title: 'Second Post',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
		},
		{
			id: '3',
			title: 'Third Post',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia,' +
        ' rerum temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae' +
        ' sequi, tempore voluptatum!',
		},
	]
};

export const profileReducer = (state: InitialStateType = InitialState, action: AddPostActionType) => {	
	const newPost = {
		id: v1(),
		title: 'New post',
		body: action.payload
	};
	switch (action.type) {
	case 'ADD-POST':				
		return {...state, postList: [...state.postList, newPost]};
	default:
		return state;
	}
};
