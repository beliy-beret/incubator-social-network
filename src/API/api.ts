import axios from "axios";
import {UserType} from "../AppTypes";

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

export const getUserList = async () => {
  try{
    const resp = await instance.get<GetUsersResponseType>('users');
    return resp.data
  }
  catch (error) {
    console.error(error)
  }
}
