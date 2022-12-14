import React from 'react';
import MessageForm from "../MessageForm/MessageForm";
import {NewMessageType} from "../../../redux/actions/actions";
import {useParams} from "react-router-dom";

export type DialogType = {
  userID: number,
  messageList: Array<string>
}

type ComponentPropsType = {
  dialogList: Array<DialogType>
  createMessage: (newMessage: NewMessageType) => void
}

function MessageList({dialogList, createMessage}: ComponentPropsType) {
  const {id} = useParams<{id?: string}>();
  const userID = Number(id);

  const showMessages = (userID: number) => {
    const dialog = dialogList.find((item) => item.userID === userID);
    return dialog?.messageList.map((item, index) => <li key={index}>{item}</li>);
  }
  const messageList = showMessages(userID);
  const sendMessage = (text: string) => {
    createMessage({userID, message: text});
  }

  return (
    <>
      <ul>
        {messageList}
      </ul>
      <MessageForm userID={userID} sendMessage={sendMessage}/>
    </>

  );
}

export default MessageList;
