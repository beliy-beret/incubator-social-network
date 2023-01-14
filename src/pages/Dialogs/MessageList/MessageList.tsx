import {MessageForm} from '../MessageForm/MessageForm';
import {useParams} from 'react-router-dom';
import {DialogType, NewMessageType} from '../../../AppTypes';
import {FC} from 'react';

type ComponentPropsType = {
  dialogList: Array<DialogType>
  createMessage: (newMessage: NewMessageType) => void
}

export const MessageList: FC<ComponentPropsType> = ({dialogList, createMessage}) => {

	const {id} = useParams<{id?: string}>();
	const userID = Number(id);
	const showMessages = (userID: number) => {
		const dialog = dialogList.find((item) => item.userID === userID);
		return dialog?.messageList.map((item, index) => <li key={index}>{item}</li>);
	};
	const messageList = showMessages(userID);
	const sendMessage = (text: string) => {
		createMessage({userID, message: text});
	};

	return (
		<>
			<ul>
				{messageList}
			</ul>
			<MessageForm userID={userID} sendMessage={sendMessage}/>
		</>

	);
};