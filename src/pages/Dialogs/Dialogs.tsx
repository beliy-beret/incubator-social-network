import React from 'react';
import {Col, Row} from "antd";
import DialogList from "./DialogList/DialogList";
import {Route, Switch} from "react-router-dom";
import MessageList from "./MessageList/MessageList";

const userList = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Viktor'},
  {id: 3, name: 'Anna'},
  {id: 4, name: 'Niki'},
  {id: 5, name: 'Vlad'}
];

function Dialogs() {
  return (
    <Row>
      <Col span={5}>
        <DialogList userList={userList} />
      </Col>
      <Col span={19}>
        <Switch>
          <Route path={'/dialogs/:id'} component={MessageList} />
        </Switch>
      </Col>
    </Row>
  );
}

export default Dialogs;
