import { UserMessageListStateType, userMessageListReducer } from './reducers'

import { DialogMessageType } from 'API/api'
import actions from './actions'

const state: UserMessageListStateType = {
  messageList: [] as DialogMessageType[],
  currentPage: 1,
  totalCount: 0,
}

test('should set message list', () => {
  const messageList: DialogMessageType[] = [
    {
      id: '3f001440-3472-4f7c-8f73-7fdc316cc905',
      body: 'Привет)',
      translatedBody: null,
      addedAt: '2020-12-16T21:43:36.797',
      senderId: 13000,
      senderName: 'Said',
      recipientId: 13001,
      viewed: true,
    },
  ]
  const newState = userMessageListReducer(
    state,
    actions.setMessageList(messageList)
  )
  expect(newState.messageList.length).toEqual(1)
  expect(newState.messageList[0].senderName).toEqual(messageList[0].senderName)
})

test('should change current page value', () => {
  const PAGE = 5
  const newState = userMessageListReducer(
    state,
    actions.setMessageListCurrentPage(PAGE)
  )
  expect(newState.currentPage).toEqual(PAGE)
})

test('should change totalCount value', () => {
  const COUNT = 300
  const newState = userMessageListReducer(
    state,
    actions.setMessagesTotalCount(COUNT)
  )
  expect(newState.totalCount).toEqual(COUNT)
})

test('should set new message to message list', () => {
  const newMessage: DialogMessageType = {
    id: 'wfdsdf',
    addedAt: 'date',
    body: 'Message',
    recipientId: 35,
    senderId: 2,
    senderName: 'User name',
    translatedBody: '',
    viewed: false,
  }
  const newState = userMessageListReducer(
    state,
    actions.setMessageToMessageList(newMessage)
  )
  expect(newState.messageList.length).toEqual(state.messageList.length + 1)
  expect(
    newState.messageList.findIndex((el) => el.id === newMessage.id)
  ).toBeGreaterThan(-1)
})
