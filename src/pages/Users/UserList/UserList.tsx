import {FC} from 'react';
import User from "../User/User";
import {UserType} from "../../../AppTypes";

type ComponentPropsType = {
  userList: Array<UserType>
  toggleFollow: (userId: number) => void
}

const UserList: FC<ComponentPropsType> = ({userList, toggleFollow}) => (
  <>
    {userList.map(item => (<User key={item.id} user={item} onClickSubscribeButton={toggleFollow}/>))}
  </>
);

export default UserList;
