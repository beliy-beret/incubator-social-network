import React from 'react';
import {Col, Row} from "antd";
import DialogList from "./DialogList/DialogList";
import {Route, Switch} from "react-router-dom";
import MessageList, {DialogType} from "./MessageList/MessageList";

type User = {
  id: number
  name: string
}

type ComponentPropsType = {
  dialogs: {
    userList: Array<User>
    messageList: Array<DialogType>
  }
}

function Dialogs({dialogs}: ComponentPropsType) {
  const {userList, messageList} = dialogs;
  return (
    <Row>
      <Col span={5}>
        <DialogList userList={userList}/>
      </Col>
      <Col span={19}>
        <Switch>
          <Route path={'/dialogs/:id'} render={() => <MessageList dialogList={messageList}/>}/>
        </Switch>
      </Col>
    </Row>
  );
}

export default Dialogs;
