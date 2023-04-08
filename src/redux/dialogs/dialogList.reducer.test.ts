import { DialogListStateType, dialogListReducer } from './reducers'

import { DialogType } from 'API/api'
import actions from './actions'

const state: DialogListStateType = []

test('should set dialog list', () => {
  const dialogList: DialogType[] = [
    {
      id: 13000,
      userName: 'Said',
      hasNewMessages: false,
      lastDialogActivityDate: '2020-12-16T21:43:36.797',
      lastUserActivityDate: '2021-02-11T14:48:29.787',
      newMessagesCount: 0,
      photos: {
        small:
          'https://social-network.samuraijs.com/activecontent/images/users/13000/user-small.jpg?v=1',
        large:
          'https://social-network.samuraijs.com/activecontent/images/users/13000/user.jpg?v=1',
      },
    },
    {
      id: 12337,
      userName: 'ReaZzy',
      hasNewMessages: true,
      lastDialogActivityDate: '2020-12-01T10:24:49.85',
      lastUserActivityDate: '2021-11-02T21:12:14.037',
      newMessagesCount: 18,
      photos: {
        small:
          'https://social-network.samuraijs.com/activecontent/images/users/12337/user-small.jpg?v=1',
        large:
          'https://social-network.samuraijs.com/activecontent/images/users/12337/user.jpg?v=1',
      },
    },
  ]
  const newState = dialogListReducer(state, actions.setDialogList(dialogList))
  expect(newState.length).toEqual(2)
})
