import { FC } from 'react'
import { Typography } from 'antd'
import classes from './message.module.css'

type ComponentPropsType = {
  body: string
  isFriendMessage: boolean
}

export const Message: FC<ComponentPropsType> = ({ body, isFriendMessage }) => {
  const messageClassName =
    classes.message +
    ' ' +
    (isFriendMessage ? classes.friendMessage : classes.myMessage)

  return (
    <div className={messageClassName}>
      <Typography.Title level={4}>
        {isFriendMessage ? 'Friend' : 'Me'}
      </Typography.Title>
      <p className={classes.body}>{body}</p>
    </div>
  )
}
