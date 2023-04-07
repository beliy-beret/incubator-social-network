import { RootStateType } from 'redux/_store'

const userList = (state: RootStateType) => state.users.userList
const totalCount = (state: RootStateType) => state.users.totalCount
const currentPage = (state: RootStateType) => state.users.currentPage

export default { userList, totalCount, currentPage }
