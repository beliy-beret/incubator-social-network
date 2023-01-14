import { UserProfileType } from './../AppTypes';
import axios from 'axios';
import {UserType} from '../AppTypes';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {'API-KEY': '7b1d643a-2777-4a5a-b415-e4c34c5cc44f'}
});

type GetUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export const getUserList = async (
	pageNumber: number,
	friend = false,
	userName: string | null = null
) => {
	try{
		const resp = await instance.get<GetUsersResponseType>('users', {
			params: {
				page: pageNumber,
				friend: friend,
				term: userName
			}
		});
		return resp.data;
	}
	catch (error) {
		console.error(error);
	}
};

export const getUserProfile = async (userId: number) => {
	try {
		const response = await instance.get<UserProfileType>(`profile/${userId}`);
		return response.data;
	}
	catch(e) {
		console.error(e);		
	}
};