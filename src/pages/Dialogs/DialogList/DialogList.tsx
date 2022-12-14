import React from 'react';
import {Link} from "react-router-dom";

export type UserType = {
  id: number,
  name: string
}

type ComponentPropsType = {
  userList: Array<UserType>
}

function DialogList({userList}: ComponentPropsType) {
  return (
    <ul>
      {userList.map(item => <li key={item.id}>
        <Link to={`/dialogs/${item.id}`}>{item.name}</Link>
      </li>)}
    </ul>
  );
}

export default DialogList;
