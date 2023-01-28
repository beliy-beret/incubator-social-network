import { FC } from 'react'
import { Link } from 'react-router-dom'
import { UserType } from '../../../AppTypes'

type ComponentPropsType = {
  userList: Array<UserType>
}

export const DialogList: FC<ComponentPropsType> = ({ userList }) => {
  return (
    <ul>
      {userList.map((item) => (
        <li key={item.id}>
          <Link to={`/dialogs/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
