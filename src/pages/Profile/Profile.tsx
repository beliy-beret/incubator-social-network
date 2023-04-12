import { RouteComponentProps, withRouter } from 'react-router-dom'

import { PureComponent, FC } from 'react'
import { RootStateType } from '../../redux/_store'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { userProfileOperations } from 'redux/userProfile'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'
import { Col, Divider, Row } from 'antd'
import { Preloader } from 'components/Preloader/Preloader'
import { UserAva } from './UserAva/UserAva'
import { Subscriptions } from './Subscriptions/Subscriptions'
import { UserInfo } from './UserInfo/UserInfo'

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
    return (
      <section>
        {this.props.isLoading && <Preloader />}
        <Row gutter={15}>
          <Col span={7}>
            <UserAva />
            <Divider>Subscriptions</Divider>
            <Subscriptions />
          </Col>
          <Col span={16}>
            <UserInfo />
          </Col>
        </Row>
      </section>
    )
  }
}

const mapState = (state: RootStateType): MapStateType => ({
  authUserId: authSelectors.authUserId(state),
  isLoading: appSelectors.isLoading(state),
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
}
type MapDispatchType = {
  fetchUserProfile: (userId: number) => void
}
