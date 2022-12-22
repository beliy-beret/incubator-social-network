import {Component} from 'react';
import UserAva from "./UserAva/UserAva";
import UserInfo from "./UserInfo/ProfileInfo";
import UserPosts from "./UserPosts/UserPosts";
import {Col, Divider, Row} from "antd";
import Subscriptions from "./Subscriptions/Subscriptions";
import PostForm from "./PostForm/PostForm";
import {PostType} from "../../AppTypes";

type ComponentPropsType = {
  postList: Array<PostType>
  addPost: (text: string) => void
}

class Profile extends Component<ComponentPropsType> {
  render() {
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
            <PostForm addNewPost={this.props.addPost}/>
          </Col>
        </Row>
        <Divider />
        <Row>
          <UserPosts postList={this.props.postList}/>
        </Row>
      </section>
    );
  }
}

export default Profile;
