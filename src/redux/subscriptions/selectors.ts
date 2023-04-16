import { RootStateType } from 'redux/_store'

const userList = (state: RootStateType) => state.subscriptions.userList
const totalCount = (state: RootStateType) => state.subscriptions.totalCount
const currentPage = (state: RootStateType) => state.subscriptions.currentPage

export default { userList, currentPage, totalCount }
