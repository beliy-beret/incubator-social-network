import {FC} from 'react';
import {UserType} from "../../redux/redusers/users-reducer";

type ComponentPropsType = {
  setUsers?: (users: Array<UserType>) => void
  userList: Array<UserType>
  toggleFollow: (userId: number) => void
}

const UserList: FC<ComponentPropsType> = ({userList, toggleFollow}) => {

  const users = userList.map(item => (
    <div key={item.id}>
      <p>Name: <span>{item.fullName}</span></p>
      <p>Status: <span>{item.status}</span></p>
      <div>Address:
        <ul>
          <li>{item.location.country}</li>
          <li>{item.location.city}</li>
        </ul>
      </div>
      <button onClick={() => toggleFollow(item.id)}>{item.isFollow ? 'Unfollow' : 'Follow'}</button>
    </div>
  ))

  return (
    <div>
      <h2>Users page</h2>
      <div>
        {users}
      </div>
    </div>
  );
}

export default UserList;
