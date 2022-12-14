import React from 'react';
import {Col, Row} from "antd";
import DialogList from "./DialogList/DialogList";
import {Route, Switch} from "react-router-dom";
import {StoreType} from "../../redux/_store";
import MessageListContainer from "./MessageListContainer/MessageListContainer";

type ComponentPropsType = {
  store: StoreType
}

function Dialogs({store}: ComponentPropsType) {
  const {userList} = store.getState().dialogsPage.dialogs;
  return (
    <Row>
      <Col span={5}>
        <DialogList userList={userList}/>
      </Col>
      <Col span={19}>
        <Switch>
          <Route path={'/dialogs/:id'} render={() => <MessageListContainer store={store}/>}/>
        </Switch>
      </Col>
    </Row>
  );
}

export default Dialogs;
