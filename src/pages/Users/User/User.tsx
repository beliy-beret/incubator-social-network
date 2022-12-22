import {FC} from "react";
import {UserType} from "../../../AppTypes";
import userImg from '../../../assets/images/user.jpg';

type ComponentPropsType = {
  user: UserType
};

const User: FC<ComponentPropsType> = ({user}) => (
  <div>
    <img src={user.photos.small || userImg} alt="avatar"/>
    <ul>
      <li>Name: {user.name}</li>
    </ul>
  </div>
);

export default User;
