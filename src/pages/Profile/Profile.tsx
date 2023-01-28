import { Component } from 'react'
import { UserAva } from './UserAva/UserAva'
import { UserInfo } from './UserInfo/UserInfo'
import { UserPosts } from './UserPosts/UserPosts'
import { Col, Divider, Row } from 'antd'
import { Subscriptions } from './Subscriptions/Subscriptions'
import { PostForm } from './PostForm/PostForm'
import { getUserProfile } from '../../API/api'
import { ProfilePageConnectType } from './ProfileContainer'
import { Preloader } from '../../components/Preloader/Preloader'

type ComponentPropsType = ProfilePageConnectType

export class Profile extends Component<ComponentPropsType> {
  componentDidMount() {
    const id = Number(this.props.match.params.id) || 2
    this.props.toggleIsLoading(true)
    getUserProfile(id)
      .then((data) => {
        this.props.setUserProfile(data!)
        setTimeout(() => this.props.toggleIsLoading(false), 300)
      })
      .catch(() => this.props.toggleIsLoading(false))
  }

  render() {
    const { userProfile, postList, isLoading, addPost } = this.props
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
            <UserInfo userData={userProfile} />
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
