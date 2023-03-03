import { Col, Divider, Row } from 'antd'

import { Component } from 'react'
import { PostForm } from './PostForm/PostForm'
import { Preloader } from '../../components/Preloader/Preloader'
import { ProfilePageConnectType } from './ProfileContainer'
import { Subscriptions } from './Subscriptions/Subscriptions'
import { UserAva } from './UserAva/UserAva'
import { UserInfo } from './UserInfo/UserInfo'
import { UserPosts } from './UserPosts/UserPosts'

type ComponentPropsType = ProfilePageConnectType

export class Profile extends Component<ComponentPropsType> {
  componentDidMount() {
    const id = Number(this.props.match.params.id) || this.props.authUserId!
    this.props.setUserProfile(id)
  }

  render() {
    const { userProfile, postList, isLoading, addPost, status } = this.props
    return (
      <section>
        {isLoading && <Preloader />}
        <Row gutter={15}>
          <Col>
            <UserAva src={userProfile.photos.large} />
            <Divider>Subscriptions</Divider>
            <Subscriptions />
          </Col>
          <Col>
            <UserInfo userData={userProfile} profileStatus={status} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <PostForm addNewPost={addPost} />
          </Col>
        </Row>
        <Divider />
        <Row>{postList && <UserPosts postList={postList} />}</Row>
      </section>
    )
  }
}
