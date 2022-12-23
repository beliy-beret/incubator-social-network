import {Component} from 'react';
import User from "./User/User";
import {UserType} from "../../AppTypes";
import {getUserList} from "../../API/api";
import {Col, Row} from "antd";

type ComponentPropsType = {
  setUsers: (users: Array<UserType>) => void
  userList: Array<UserType>
  toggleFollow: (userId: number) => void
}


class UserList extends Component<ComponentPropsType> {

  componentDidMount() {
    getUserList().then(data => this.props.setUsers(data?.items!));
  }

  render() {
    return (
      <Row justify={'center'}>
        <Col span={23}>
          {this.props.userList.map(item => (<User key={item.id} user={item} onClickSubscribeButton={this.props.toggleFollow}/>))}
        </Col>
      </Row>
    );
  }
}

export default UserList;
