import React from 'react';
import UserAva from "./UserAva/UserAva";
import UserInfo from "./UserInfo/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import {Col, Divider, Row} from "antd";
import Subscriptions from "./Subscriptions/Subscriptions";
import PostForm from "./PostForm/PostForm";
import {StoreType} from "../../redux/_store";
import {addPostAC} from "../../redux/actions/actions";

export type PostType = {
  id: number
  title: string
  body: string
}

type ComponentProps = {
  store: StoreType
}

function Profile({store}: ComponentProps) {

  const state = store.getState();
  const addNewPost = (text: string) => {
    store.dispatch(addPostAC(text));
  }

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
          <PostForm addNewPost={addNewPost}/>
        </Col>
      </Row>
      <Divider />
      <Row>
        <UserPosts postList={state.profilePage.posts}/>
      </Row>
    </section>
  );
}

export default Profile;
