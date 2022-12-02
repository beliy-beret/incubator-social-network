import React from 'react';
import {useParams} from "react-router-dom";

type DialogListType = {
  userID: number,
  messageList: Array<string>
}

const dialogList: Array<DialogListType> = [
  {userID: 1, messageList: ['Hello !', 'My name is Andrey']},
  {userID: 2, messageList: ['Hello !', 'My name is Viktor']},
  {userID: 3, messageList: ['Hello !', 'My name is Anna']},
  {userID: 4, messageList: ['Hello !', 'My name is Niki']},
  {userID: 5, messageList: ['Hello !', 'My name is Vlad']},
];

function MessageList() {
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
