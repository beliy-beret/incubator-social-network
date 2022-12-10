import {FormEvent, FC, useState} from 'react';
import {ActionTypes, createMessageAC} from "../../../redux/_store";
import {Button} from "antd";

type ComponentPropsType = {
  userID: number
  dispatch: (AC: ActionTypes) => void
}

const MessageForm: FC<ComponentPropsType> = ({userID, dispatch}) => {
  const [message, setMessage] = useState('');
  const handleMessage = (e: FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  }
  const sendMessage = () => {
    dispatch(createMessageAC({userID, message}));
    setMessage('');
  }
  return (
    <div>
      <textarea onChange={handleMessage} value={message} name={"message"} rows={5}></textarea>
      <Button onClick={sendMessage} type={'primary'}>Send message</Button>
    </div>
  );
};

export default MessageForm;
