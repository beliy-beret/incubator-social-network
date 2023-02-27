import { AuthDataType, AuthFormDataType, UserProfileType } from './../AppTypes'

import { UserType } from '../AppTypes'
import axios from 'axios'

type ResponseType = {
  resultCode: number
  messages: Array<string>
}

type GetUsersType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

type GetAuthDataResponseType = ResponseType & {
  data: AuthDataType
}

type SignInResponseType = ResponseType & {
  data: {
    userId: number
  }
}

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '7b1d643a-2777-4a5a-b415-e4c34c5cc44f' },
})

export const checkIsAuth = async () => {
  try {
    const resp = await instance.get<GetAuthDataResponseType>('auth/me')
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const signIn = async (formData: AuthFormDataType) => {
  try {
    const resp = await instance.post<SignInResponseType>('auth/login', {
      ...formData,
    })
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const signOut = async () => {
  try {
    const resp = await instance.delete<ResponseType>('auth/login')
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const getUserList = async (
  pageNumber: number,
  friend?: boolean,
  userName?: string
) => {
  try {
    const resp = await instance.get<GetUsersType>('users', {
      params: {
        page: pageNumber,
        friend: friend,
        term: userName,
      },
    })
    return resp.data
  } catch (error) {
    console.error(error)
  }
}

export const getUserProfile = async (userId: number) => {
  try {
    const response = await instance.get<UserProfileType>(`profile/${userId}`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export const subscribe = async (userId: number) => {
  try {
    const resp = await instance.post<ResponseType>(`follow/${userId}`)
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const unsubscribe = async (userId: number) => {
  try {
    const resp = await instance.delete<ResponseType>(`follow/${userId}`)
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const getProfileStatus = async (userId: number) => {
  try {
    const resp = await instance.get<string>(`profile/status/${userId}`)
    return resp.data
  } catch (e) {
    console.error(e)
  }
}

export const changeProfileStatus = async (status: string) => {
  try {
    const resp = await instance.put<ResponseType>(`profile/status`, {
      status,
    })
    return resp.data
  } catch (e) {
    console.error(e)
  }
}
