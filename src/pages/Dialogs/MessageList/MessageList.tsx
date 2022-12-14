import React from 'react';
import MessageForm from "../MessageForm/MessageForm";

export type DialogType = {
  userID: number,
  messageList: Array<string>
}

type ComponentPropsType = {
  dialogList: Array<DialogType>
  userId: number
  createMessage: (text: string) => void
}

function MessageList({dialogList, userId, createMessage}: ComponentPropsType) {

  const showMessages = (userID: number) => {
    const dialog = dialogList.find((item) => item.userID === userID);
    return dialog?.messageList.map((item, index) => <li key={index}>{item}</li>);
  }
  const messageList = showMessages(userId);
  const sendMessage = (text: string) => {
    createMessage(text);
  }

  return (
    <>
      <ul>
        {messageList}
      </ul>
      <MessageForm userID={userId} sendMessage={sendMessage}/>
    </>

  );
}

export default MessageList;
