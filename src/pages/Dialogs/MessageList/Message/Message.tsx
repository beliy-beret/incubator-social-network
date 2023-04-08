import { FC } from 'react'
import classes from './message.module.css'

type ComponentPropsType = {
  body: string
  isFriendMessage: boolean
}

export const Message: FC<ComponentPropsType> = ({ body, isFriendMessage }) => {
  const messageClassName =
    classes.message + ' ' + (isFriendMessage ? classes.friend : null)
  return (
    <div className={messageClassName}>
      <p className={classes.body}>{body}</p>
    </div>
  )
}
