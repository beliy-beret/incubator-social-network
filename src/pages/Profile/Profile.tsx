import { Col, Divider, Row } from 'antd'
import { FC, PureComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { Preloader } from 'components/Preloader/Preloader'
import { RootStateType } from '../../redux/_store'
import { Subscriptions } from './Subscriptions/Subscriptions'
import { UserAva } from './UserAva/UserAva'
import { UserInfo } from './UserInfo/UserInfo'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

class ProfileComponent extends PureComponent<ComponentPropsType> {
  componentDidMount() {
    const id = this.props.match.params.id
      ? Number(this.props.match.params.id)
      : this.props.authUserId
    if (id) {
      this.props.fetchUserProfile(id)
    }
  }

  componentDidUpdate(prevProps: ComponentPropsType) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id
        ? Number(this.props.match.params.id)
        : this.props.authUserId
      if (id) {
        this.props.fetchUserProfile(id)
      }
    }
  }

  render() {
    const isOwner = this.props.authUserId === this.props.profileId
    return (
      <section>
        {this.props.isLoading && <Preloader />}
        <Row gutter={15}>
          <Col span={7}>
            <UserAva isOwner={isOwner} />
            <Divider>Subscriptions</Divider>
            <Subscriptions />
          </Col>
          <Col span={16}>
            <UserInfo isOwner={isOwner} />
          </Col>
        </Row>
      </section>
    )
  }
}

const mapState = (state: RootStateType): MapStateType => ({
  authUserId: authSelectors.authUserId(state),
  isLoading: appSelectors.isLoading(state),
  profileId: userProfileSelectors.profileId(state),
})
const mapDispatch: MapDispatchType = {
  fetchUserProfile: (userId: number) =>
    userProfileOperations.setUserProfileThunk(userId),
}

export const Profile = compose<FC>(
  connect(mapState, mapDispatch),
  withRouter,
  withAuthRedirect
)(ProfileComponent)

// Types

type ComponentPropsType = MapStateType &
  MapDispatchType &
  RouteComponentProps<{ id: string }>
type MapStateType = {
  authUserId: number | null
  isLoading: boolean
  profileId: number | null
}
type MapDispatchType = {
  fetchUserProfile: (userId: number) => void
}
