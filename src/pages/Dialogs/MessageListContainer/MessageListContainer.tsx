import {FC} from 'react';
import MessageList from "../MessageList/MessageList";
import {StoreType} from "../../../redux/_store";
import {useParams} from "react-router-dom";
import {createMessageAC} from "../../../redux/actions/actions";

type ComponentPropsType = {
  store: StoreType
}

const MessageListContainer: FC<ComponentPropsType> = ({store}) => {
  const {id} = useParams<{id?: string}>();
  const userID = Number(id);
  const createMessage = (text: string) => {
    store.dispatch(createMessageAC({userID: userID, message: text}));
  }
  const dialogList = store.getState().dialogsPage.dialogs.messageList;
  return <MessageList dialogList={dialogList} userId={userID} createMessage={createMessage} />;
};

export default MessageListContainer;
