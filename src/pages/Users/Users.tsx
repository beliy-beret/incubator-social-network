import {Component} from "react";
import {UserType} from "../../AppTypes";
import {getUserList} from "../../API/api";
import UserList from "./UserList/UserList";
import {Col, Divider, Row} from "antd";
import MyPagination from "../../components/MyPagination/MyPagination";

type ComponentPropsType = {
  userList: Array<UserType>
  totalCount: number
  currentPage: number
  setUsers: (users: Array<UserType>) => void
  toggleFollow: (userId: number) => void
  setCurrentPage: (page: number) => void
  setTotalCount: (count: number) => void
}

class Users extends Component<ComponentPropsType> {

  componentDidMount() {
    getUserList().then((data) => {
      this.props.setUsers(data?.items!);
      this.props.setTotalCount(data?.totalCount!);
    });
  }

  render() {
    return (
      <>
        <Row justify={'center'}>
          <Col span={20}>
            <MyPagination totalCount={this.props.totalCount} pageSize={10} currentPage={this.props.currentPage}/>
          </Col>
        </Row>
        <Divider />
        <Row justify={'center'}>
          <Col span={23}>
            <UserList userList={this.props.userList} toggleFollow={this.props.toggleFollow}/>
          </Col>
        </Row>
      </>
    );
  }
}

export default Users;
