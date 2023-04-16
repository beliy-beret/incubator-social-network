import { FC } from 'react'
import { Typography } from 'antd'
import classes from './message.module.css'

type ComponentPropsType = {
  body: string
  isFriendMessage: boolean
  friendName: string
}

export const Message: FC<ComponentPropsType> = ({
  body,
  isFriendMessage,
  friendName,
}) => {
  const messageClassName =
    classes.message +
    ' ' +
    (isFriendMessage ? classes.friendMessage : classes.myMessage)

  return (
    <div className={messageClassName}>
      <Typography.Title level={4}>
        {isFriendMessage ? friendName : 'Me'}
      </Typography.Title>
      <p className={classes.body}>{body}</p>
    </div>
  )
}
