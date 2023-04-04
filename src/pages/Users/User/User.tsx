import { Button } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { UserType } from 'API/api'
import style from './user.module.css'
import userImg from '../../../assets/images/user.jpg'

type ComponentPropsType = {
  user: UserType
  onClickSubscribeButton: (userId: number) => void
}

export const User: FC<ComponentPropsType> = ({
  user,
  onClickSubscribeButton,
}) => {
  const subscribeButtonHandle = () => {
    onClickSubscribeButton(user.id)
  }
  return (
    <div className={style.user}>
      <img src={user.photos.small || userImg} alt={'samurai'} />
      <div>
        <h3 className={style.name}>{user.name}</h3>
        <span>{user.status}</span>
      </div>
      <div className={style.btnContainer}>
        <Link to={`profile/${user.id}`}>Go to profile</Link>
        <Button type={'primary'} onClick={subscribeButtonHandle}>
          {user.followed ? 'Unsubscribe' : 'Subscribe'}
        </Button>
      </div>
    </div>
  )
}
