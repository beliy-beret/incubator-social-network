import { Col, Divider, Row } from 'antd'

import { Component } from 'react'
import { Preloader } from '../../components/Preloader/Preloader'
import { ProfilePageConnectType } from './ProfileContainer'
import { Subscriptions } from './Subscriptions/Subscriptions'
import { UserAva } from './UserAva/UserAva'
import { UserInfo } from './UserInfo/UserInfo'

type ComponentPropsType = ProfilePageConnectType

export class Profile extends Component<ComponentPropsType> {
  componentDidMount() {
    const id = this.props.match.params.id
      ? Number(this.props.match.params.id)
      : this.props.authUserId
    if (id) {
      this.props.setUserProfile(id)
    }
  }

  componentDidUpdate(prevProps: ComponentPropsType) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id
        ? Number(this.props.match.params.id)
        : this.props.authUserId
      if (id) {
        this.props.setUserProfile(id)
      }
    }
  }

  render() {
    const { userProfile, isLoading, profileStatus } = this.props
    return (
      <section>
        {isLoading && <Preloader />}
        <Row gutter={15}>
          <Col span={7}>
            <UserAva src={userProfile.photos.large} />
            <Divider>Subscriptions</Divider>
            <Subscriptions />
          </Col>
          <Col span={16}>
            <UserInfo userData={userProfile} profileStatus={profileStatus} />
          </Col>
        </Row>
      </section>
    )
  }
}
