import reducer, { UserProfileInitialStateType } from './reducers'

import { UserProfileType } from 'API/api'
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
