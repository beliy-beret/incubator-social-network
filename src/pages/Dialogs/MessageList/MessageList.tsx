import { DialogMessageType } from 'API/api'
import { FC } from 'react'
import { Message } from './Message/Message'
import classes from './messageList.module.css'

type ComponentPropsType = {
  messageList: DialogMessageType[]
  authUserId: number | null
}

export const MessageList: FC<ComponentPropsType> = ({
  messageList,
  authUserId,
}) => {
  if (!messageList.length) {
    return <p style={{ textAlign: 'center' }}>Message list empty.</p>
  }
  return (
    <div className={classes.messageList}>
      {messageList.map((item) => (
        <Message
          key={item.id}
          body={item.body}
          isFriendMessage={authUserId !== item.senderId}
          friendName={authUserId !== item.senderId ? item.senderName : ''}
        />
      ))}
    </div>
  )
}
