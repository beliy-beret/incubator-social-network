import { FC } from 'react'
import { User } from '../User/User'
import { UserType } from 'API/api'

type ComponentPropsType = {
  userList: Array<UserType>
  toggleSubscription: (userId: number) => void
  sendMessage: (userId: number, message: string) => void
}

export const UserList: FC<ComponentPropsType> = ({
  userList,
  toggleSubscription,
  sendMessage,
}) => {
  return (
    <>
      {userList.map((item) => (
        <User
          key={item.id}
          user={item}
          subscribe={toggleSubscription}
          sendMessage={sendMessage}
        />
      ))}
    </>
  )
}
