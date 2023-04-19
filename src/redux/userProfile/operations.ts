import { ResponseStatus, ResponseType, UserProfileType } from 'API/api'

import { AppThunkType } from 'redux/_store'
import { UpdateProfileFormDataType } from 'API/api'
import actions from './actions'
import { appOperations } from 'redux/app'
import { userProfileApi } from 'API/api'

const deleteProfileData = () =>
  actions.setUserProfile({
    aboutMe: '',
    fullName: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    userId: null,
    contacts: {},
    photos: {
      small: '',
      large: '',
    },
  } as UserProfileType)

const setUserProfileThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.getProfileData(userId)
      dispatch(actions.setUserProfile(res.data))
    } catch (e) {
      console.error(e)
    } finally {
      setTimeout(() => dispatch(appOperations.toggleIsLoading(false)), 300)
    }
  }
}

const changeUserProfileThunk = (
  formData: UpdateProfileFormDataType
): AppThunkType<Promise<ResponseType<object> | undefined>> => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const data: Omit<UserProfileType, 'photos'> = {
        userId: formData.userId,
        fullName: formData.fullName,
        aboutMe: formData.aboutMe,
        lookingForAJob: formData.lookingForAJob,
        lookingForAJobDescription: formData.lookingForAJobDescription,
        contacts: {
          github: formData.github,
          vk: formData.vk,
          instagram: formData.instagram,
          facebook: formData.facebook,
          twitter: formData.twitter,
          website: formData.website,
          mainLink: formData.mainLink,
          youtube: formData.youtube,
        },
      }
      const res = await userProfileApi.setProfileData(data)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(setUserProfileThunk(formData.userId!))
        dispatch(appOperations.setAppErrorMessage(''))
        return res.data
      } else {
        dispatch(appOperations.setAppErrorMessage(res.data.messages[0]))
        return res.data
      }
    } catch (e) {
      dispatch(appOperations.setAppErrorMessage((e as Error).message))
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const changeUserProfilePhotosThunk = (photo: File): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.setProfilePhoto(photo)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.setProfilePhotos(res.data.data.photos))
        dispatch(appOperations.setAppErrorMessage(''))
      }
    } catch (e) {
      console.error(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const setProfileStatusThunk = (userId: number): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.getProfileStatus(userId)
      dispatch(actions.setProfileStatus(res.data))
    } catch (e) {
      console.error(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

const changeProfileStatusThunk = (status: string): AppThunkType => {
  return async (dispatch) => {
    dispatch(appOperations.toggleIsLoading(true))
    try {
      const res = await userProfileApi.setProfileStatus(status)
      if (res.data.resultCode === ResponseStatus.SUCCESS) {
        dispatch(actions.setProfileStatus(status))
      } else {
        throw new Error(res.data.messages[0])
      }
    } catch (e) {
      console.error(e)
    } finally {
      dispatch(appOperations.toggleIsLoading(false))
    }
  }
}

export default {
  setProfileStatusThunk,
  setUserProfileThunk,
  changeProfileStatusThunk,
  changeUserProfileThunk,
  changeUserProfilePhotosThunk,
  deleteProfileData,
}
