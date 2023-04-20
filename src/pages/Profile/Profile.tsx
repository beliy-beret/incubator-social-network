import { Col, Row } from 'antd'
import { ConnectedProps, connect } from 'react-redux'
import { FC, PureComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { Preloader } from 'components/Preloader/Preloader'
import { RootStateType } from '../../redux/_store'
import { UserAva } from './UserAva/UserAva'
import { UserInfo } from './UserInfo/UserInfo'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

class ProfileComponent extends PureComponent<ComponentPropsType> {
  componentDidMount() {
    debugger
    const id = Number(this.props.match.params.id) || this.props.authUserId
    this.props.fetchUserProfile(id!)
  }

  componentDidUpdate(prevProps: ComponentPropsType) {
    const id = Number(this.props.match.params.id) || this.props.authUserId
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchUserProfile(id!)
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
          </Col>
          <Col span={16}>
            <UserInfo isOwner={isOwner} />
          </Col>
        </Row>
      </section>
    )
  }
}

const mapState = (state: RootStateType) => ({
  authUserId: authSelectors.authUserId(state),
  isLoading: appSelectors.isLoading(state),
  profileId: userProfileSelectors.profileId(state),
})
const mapDispatch = {
  fetchUserProfile: (userId: number) =>
    userProfileOperations.setUserProfileThunk(userId),
}

const connector = connect(mapState, mapDispatch)

export default compose<FC>(
  connector,
  withRouter,
  withAuthRedirect
)(ProfileComponent)

// Types
type ConnectType = ConnectedProps<typeof connector>
type ComponentPropsType = ConnectType & RouteComponentProps<{ id: string }>
