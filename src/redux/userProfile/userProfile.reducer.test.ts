import reducer, { UserProfileInitialStateType } from './reducers'

import { PhotoType, UserProfileType } from 'API/api'
import actions from './actions'

const state: UserProfileInitialStateType = {
  userProfile: {
    userId: 13001,
    aboutMe: 'About user',
    fullName: 'Name',
    lookingForAJob: true,
    lookingForAJobDescription: 'Job description',
    photos: { large: null, small: null },
    contacts: {},
  },
  profileStatus: 'User profile status',
}

test('Should change profile status', () => {
  const newStatus = 'New status'
  const newState = reducer(state, actions.setProfileStatus(newStatus))
  expect(newState.profileStatus).not.toBe(state.profileStatus)
  expect(newState.profileStatus).toBe(newStatus)
})

test('should set new user profile', () => {
  const newState = reducer(state, actions.setUserProfile({} as UserProfileType))
  expect(newState.userProfile.userId).not.toBeDefined()
})

test('Should change photo URL', () => {
  const photos: PhotoType = {
    small: 'smallPhotoURL',
    large: 'largePhotoURL',
  }
  const newState = reducer(state, actions.setProfilePhotos(photos))
  expect(newState.userProfile.photos.small).toEqual(photos.small)
  expect(newState.userProfile.photos.large).toEqual(photos.large)
})
