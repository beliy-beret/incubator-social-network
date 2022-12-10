import React from 'react';
import {useParams} from "react-router-dom";
import MessageForm from "../MessageForm/MessageForm";
import {ActionTypes} from "../../../redux/_store";

export type DialogType = {
  userID: number,
  messageList: Array<string>
}

type ComponentPropsType = {
  dialogList: Array<DialogType>
  dispatch: (AC: ActionTypes) => void
}

function MessageList({dialogList, dispatch}: ComponentPropsType) {
  const {id} = useParams<{id?: string}>();
  const userID = Number(id);
  function showMessages(userID: number) {
    const dialog = dialogList.find((item) => item.userID === userID);
    return dialog?.messageList.map((item, index) => <li key={index}>{item}</li>);
  }

  return (
    <>
      <ul>
        {showMessages(userID)}
      </ul>
      <MessageForm userID={userID} dispatch={dispatch} />
    </>

  );
}

export default MessageList;
