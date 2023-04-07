import { RootStateType } from 'redux/_store'

const userList = (state: RootStateType) => state.users.userList
const totalCount = (state: RootStateType) => state.users.totalCount
const curentPage = (state: RootStateType) => state.users.currentPage

export default { userList, totalCount, curentPage }
