import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/actions/actions";
import { UserType } from "../../AppTypes";
import Users from "./Users";
import { RootStateType } from "../../redux/_store";

type PropType = {
  userList: Array<UserType>;
  currentPage: number;
  totalCount: number;
};

const mapState = (state: RootStateType): PropType => ({
  userList: state.usersPage.userList,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage
});

const mapDispatch = {
  toggleFollow: (userId: number) => toggleFollowAC(userId),
  setUsers: (userList: Array<UserType>) => setUsersAC(userList),
  setCurrentPage: (page: number) => setCurrentPageAC(page),
  setTotalCount: (count: number) => setTotalCountAC(count),
};

const UsersContainer = connect(mapState, mapDispatch)(Users);

export default UsersContainer;
