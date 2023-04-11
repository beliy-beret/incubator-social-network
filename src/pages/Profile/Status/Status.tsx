import { Button, Col, Input, Row, Typography } from 'antd'
import { ChangeEvent, PureComponent } from 'react'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { EditOutlined } from '@ant-design/icons'
import { RootStateType } from '../../../redux/_store'
import { authSelectors } from 'redux/auth'
import { connect } from 'react-redux'

type ComponentPropsType = PropsType & MapDispatchType

type StateType = {
  isEdit: boolean
  status: string
}

class ProfileStatus extends PureComponent<ComponentPropsType, StateType> {
  state = {
    isEdit: false,
    status: this.props.profileStatus,
  }
  componentDidMount(): void {
    this.props.getProfileStatus(this.props.userId)
  }
  enableEdit = () => {
    this.setState({ isEdit: true })
  }
  disableEdit = () => {
    this.setState({ isEdit: false })
    if (this.props.profileStatus !== this.state.status) {
      this.props.changeProfileStatus(this.state.status)
    }
  }
  setStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value })
  }

  render() {
    return (
      <Row justify='space-between'>
        <Col>
          {this.state.isEdit ? (
            <Input
              type='text'
              value={this.state.status}
              onBlur={this.disableEdit}
              autoFocus={true}
              onChange={this.setStatus}
            />
          ) : (
            <Typography.Text>{this.props.profileStatus}</Typography.Text>
          )}
        </Col>
        <Col>
          <Button type='text' onClick={this.enableEdit}>
            {this.props.profileStatus ? <EditOutlined /> : 'Add Status.'}
          </Button>
        </Col>
      </Row>
    )
  }
}

type PropsType = {
  userId: number
  profileStatus: string
}
type MapDispatchType = {
  getProfileStatus: (userId: number) => void
  changeProfileStatus: (status: string) => void
}

const mapState = (state: RootStateType): PropsType => {
  return {
    userId: authSelectors.authUserId(state)!,
    profileStatus: userProfileSelectors.profileStatus(state),
  }
}
const mapDispatch = {
  getProfileStatus: (userId: number) =>
    userProfileOperations.setProfileStatusThunk(userId),
  changeProfileStatus: (status: string) =>
    userProfileOperations.changeProfileStatusThunk(status),
}

export const Status = connect(mapState, mapDispatch)(ProfileStatus)
