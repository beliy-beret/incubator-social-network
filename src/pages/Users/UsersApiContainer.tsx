import {Component} from "react";
import {UserType} from "../../AppTypes";
import {getUserList} from "../../API/api";
import UserPage from "./UserPage";

type ComponentPropsType = {
  userList: Array<UserType>
  totalCount: number
  currentPage: number
  setUsers: (users: Array<UserType>) => void
  toggleFollow: (userId: number, status: boolean) => void
  setCurrentPage: (page: number) => void
  setTotalCount: (count: number) => void
}

class UsersApiContainer extends Component<ComponentPropsType> {

  getUsers = () => {
    getUserList(this.props.currentPage).then((data) => {
      this.props.setUsers(data?.items!);
      this.props.setTotalCount(data?.totalCount!);
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate(prevProps: Readonly<ComponentPropsType>) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.getUsers();
    }
  }

  render() {
    return <UserPage
      totalCount={this.props.totalCount}
      currentPage={this.props.currentPage}
      setCurrentPage={this.props.setCurrentPage}
      userList={this.props.userList}
      toggleFollow={this.props.toggleFollow}
    />
  };
}

export default UsersApiContainer;
