import React from 'react';
import {useParams} from "react-router-dom";

export type DialogType = {
  userID: number,
  messageList: Array<string>
}

type ComponentPropsType = {
  dialogList: Array<DialogType>
}

function MessageList({dialogList}: ComponentPropsType) {
  const {id} = useParams<{id?: string}>();
  const userID = Number(id);
  function showMessages(userID: number) {
    const dialog = dialogList.find((item) => item.userID === userID);
    return dialog?.messageList.map((item, index) => <li key={index}>{item}</li>);
  }

  return (
    <ul>
      {showMessages(userID)}
    </ul>
  );
}

export default MessageList;
