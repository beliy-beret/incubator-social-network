import React from 'react';
import {Col, Row} from "antd";
import DialogList, {UserType} from "./DialogList/DialogList";
import {Route, Switch} from "react-router-dom";
import MessageList, {DialogType} from "./MessageList/MessageList";
import {NewMessageType} from "../../redux/actions/actions";

export type DialogsType = {
  userList: Array<UserType>
  messageList: Array<DialogType>
}
type ComponentPropsType = {
  dialogs: DialogsType
  createMessage: ({userID, message}: NewMessageType) => void
}

function Dialogs({dialogs, createMessage}: ComponentPropsType) {
  const {userList, messageList: dialogList} = dialogs;
  return (
    <Row>
      <Col span={5}>
        <DialogList userList={userList}/>
      </Col>
      <Col span={19}>
        <Switch>
          <Route path={'/dialogs/:id'} render={() => <MessageList createMessage={createMessage} dialogList={dialogList}/>}/>
        </Switch>
      </Col>
    </Row>
  );
}

export default Dialogs;
