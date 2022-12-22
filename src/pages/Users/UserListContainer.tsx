import {connect} from "react-redux";
import UserList from "./UserList";
import {RootStateType} from "../../redux/_store";
import {setUsersAC, toggleFollowAC} from "../../redux/actions/actions";
import {UserType} from "../../AppTypes";

const mapState = (state: RootStateType) => ({
  userList: state.usersPage
})
const mapDispatch = {
  toggleFollow: (userId: number) => toggleFollowAC(userId),
  setUsers: (userList: Array<UserType>) => setUsersAC(userList)
}

const UserListContainer = connect(mapState, mapDispatch)(UserList);

export default UserListContainer;
