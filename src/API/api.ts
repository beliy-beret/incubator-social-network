import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '7b1d643a-2777-4a5a-b415-e4c34c5cc44f' },
})

export const authApi = {
  getAuthData() {
    return instance.get<ResponseType<AuthDataType>>('auth/me')
  },
  getCaptcha() {
    return instance.get<{ url: string }>('security/get-captcha-url')
  },
  postAuthorizeData(formData: AuthFormDataType) {
    return instance.post<ResponseType<{ userId: number }>>(
      'auth/login',
      formData
    )
  },
  deleteAuthData() {
    return instance.delete<ResponseType<object>>('auth/login')
  },
}

export const usersApi = {
  getUserList(page: number, friend?: boolean, term?: string) {
    return instance.get<{ items: UserType[] }>('users', {
      params: { page, friend, term },
    })
  },
  checkSubscribe(userId: number) {
    return instance.get<boolean>(`follow/${userId}`)
  },
  subscribe(userId: number) {
    return instance.post<ResponseType<object>>(`follow/${userId}`)
  },
  unsubscribe(userId: number) {
    return instance.delete<ResponseType<object>>(`follow/${userId}`)
  },
}

export const userProfileApi = {
  getProfileData(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`)
  },
  getProfileStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  setProfileStatus(status: string) {
    return instance.put<ResponseType<object>>(`profile/status`, { status })
  },
  setProfileData(formData: UpdateProfileFormDataType) {
    return instance.put('profile', formData)
  },
}

export const dialogsApi = {
  getDialogList() {
    return instance.get<DialogType[]>('dialogs')
  },
  getMessagesFromUser(userId: number) {
    return instance.get<{
      items: DialogMessageType[]
      totalCount: number
      error: null | string
    }>(`dialogs/${userId}/messages`)
  },
}

// Types

type ResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}

export type AuthDataType = {
  id: number | null
  email: string
  login: string
}

export type AuthFormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

export type UpdateProfileFormDataType = Omit<UserProfileType, 'photos'>

export type PhotoType = {
  small: string | null
  large: string | null
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: PhotoType
  status: string | null
  followed: boolean
}

export type UserProfileType = {
  aboutMe: string
  contacts: ContactListType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number | null
  photos: PhotoType
}

export enum ResponseStatus {
  'SUCCESS' = 0,
  'ERROR' = 1,
  'CAPTCHA' = 10,
}

export type ContactListType = Record<
  | 'github'
  | 'vk'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'website'
  | 'youtube'
  | 'mainLink',
  string | null
>

export type DialogType = {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotoType
}

export type DialogMessageType = {
  id: string
  body: string
  translatedBody: unknown
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  viewed: boolean
}
