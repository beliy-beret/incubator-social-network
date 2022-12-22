import {Component} from 'react';
import User from "./User/User";
import {UserType} from "../../AppTypes";
import {getUserList} from "../../API/api";

type ComponentPropsType = {
  setUsers: (users: Array<UserType>) => void
  userList: Array<UserType>
  toggleFollow: (userId: number) => void
}


class UserList extends Component<ComponentPropsType> {

  getUserButtonHandle = () => {
    getUserList().then(data => this.props.setUsers(data?.items!))
  }
  componentDidMount() {
    this.getUserButtonHandle();
  }

  render() {
    return (
      <div>
        <h2>Users page</h2>
        <div>
          {this.props.userList.map(item => (<User key={item.id} user={item}/>))}
        </div>
      </div>
    );
  }
}

export default UserList;
