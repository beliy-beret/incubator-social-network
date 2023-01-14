import {FormEvent, FC, useState} from 'react';
import {Button} from 'antd';

type ComponentPropsType = {
  userID: number
  sendMessage: (message: string) => void
}

export const MessageForm: FC<ComponentPropsType> = ({sendMessage}) => {

	const [message, setMessage] = useState('');
	const handleMessage = (e: FormEvent<HTMLTextAreaElement>) => {
		setMessage(e.currentTarget.value);
	};
	const sendNewMessage = () => {
		sendMessage(message);
		setMessage('');
	};

	return (
		<div>
			<textarea onChange={handleMessage} value={message} name={'message'} rows={5}></textarea>
			<Button onClick={sendNewMessage} type={'primary'}>Send message</Button>
		</div>
	);
};