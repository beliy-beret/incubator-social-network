import React from 'react';
import UserAva from "./UserAva/UserAva";
import UserInfo from "./UserInfo/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import {Col, Divider, Row} from "antd";
import Subscriptions from "./Subscriptions/Subscriptions";
import PostForm from "./PostForm/PostForm";

export type PostType = {
  id: number
  title: string
  body: string
}

type ComponentProps = {
  postList: Array<PostType>
  addPost: (text: string) => void
}

function Profile({postList, addPost}: ComponentProps) {
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
        <Col span={24}>
          <PostForm addPost={addPost}/>
        </Col>
      </Row>
      <Divider />
      <Row>
        <UserPosts postList={postList}/>
      </Row>
    </section>
  );
}

export default Profile;
