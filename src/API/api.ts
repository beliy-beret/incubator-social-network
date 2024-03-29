import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': process.env.REACT_APP_API_KEY! },
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
    return instance.get<{
      items: UserType[]
      totalCount: number
      error: string | null
    }>('users', {
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
  setProfileData(formData: Omit<UserProfileType, 'photos'>) {
    return instance.put<ResponseType<object>>('profile', formData)
  },
  setProfilePhoto(file: File) {
    const formData = new FormData()
    formData.append('image', file)
    return instance.put<ResponseType<{ photos: PhotoType }>>(
      'profile/photo',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
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
  postMessage(userId: number, message: string) {
    return instance.post<
      SendMessageResponseType<{ message: DialogMessageType }>
    >(`dialogs/${userId}/messages`, { body: message })
  },
}

// Types

export type ResponseType<D> = {
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

export type UpdateProfileFormDataType = Omit<
  UserProfileType,
  'photos' | 'contacts'
> &
  Record<
    | 'github'
    | 'vk'
    | 'facebook'
    | 'instagram'
    | 'twitter'
    | 'website'
    | 'youtube'
    | 'mainLink',
    string
  >

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
export type ContactListType = { [key: string]: string }

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

export type SendMessageResponseType<D> = ResponseType<D> & {
  fieldsErrors: string[]
}
