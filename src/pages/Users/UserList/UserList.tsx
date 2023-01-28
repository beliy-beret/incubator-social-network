import { FC } from 'react'
import { User } from '../User/User'
import { UserType } from '../../../AppTypes'

type ComponentPropsType = {
  userList: Array<UserType>
  toggleSubscription: (userId: number) => void
}

export const UserList: FC<ComponentPropsType> = ({
  userList,
  toggleSubscription,
}) => (
  <>
    {userList.map((item) => (
      <User
        key={item.id}
        user={item}
        onClickSubscribeButton={toggleSubscription}
      />
    ))}
  </>
)
