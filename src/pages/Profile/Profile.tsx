import React from 'react';
import UserAva from "./UserAva/UserAva";
import UserInfo from "./UserInfo/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import {Col, Divider, Row} from "antd";
import Subscriptions from "./Subscriptions/Subscriptions";

function Profile() {
  return (
    <section>
      <Row gutter={15}>
        <Col>
          <UserAva/>
          <Divider>Subscriptions</Divider>
          <Subscriptions />
        </Col>
        <Col>
          <UserInfo/>
        </Col>
      </Row>
      <Divider />
      <Row>
        <UserPosts/>
      </Row>
    </section>
  );
}

export default Profile;
