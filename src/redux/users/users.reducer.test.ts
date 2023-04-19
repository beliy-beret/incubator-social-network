import reducer, { UsersInitialStateType } from './reducers'

import actions from './actions'

const state: UsersInitialStateType = {
  userList: [],
  currentPage: 5,
  totalCount: 30,
}

test('Should set user list', () => {
  const userList = [
    {
      name: 'Exisst',
      id: 28685,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
    {
      name: 'hermy',
      id: 28684,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: false,
    },
  ]
  const newState = reducer(state, actions.setUsers(userList))
  expect(newState.userList.length).toEqual(2)
})

test('should set new current page', () => {
  const newCurrentPage = 10
  const newState = reducer(state, actions.setCurrentPage(newCurrentPage))
  expect(newState.currentPage).toEqual(newCurrentPage)
})

test('should set new total count', () => {
  const newTotalCount = 5
  const newState = reducer(state, actions.setTotalCount(newTotalCount))
  expect(newState.totalCount).toEqual(newTotalCount)
})
