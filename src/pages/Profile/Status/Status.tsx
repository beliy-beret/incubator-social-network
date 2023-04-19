import { Button, Col, Input, Row, Skeleton, Typography } from 'antd'
import { ChangeEvent, PureComponent } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { EditOutlined } from '@ant-design/icons'
import { RootStateType } from '../../../redux/_store'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'

class ProfileStatus extends PureComponent<ComponentPropsType, StateType> {
  state = {
    isEdit: false,
    status: '',
  }
  enableEdit = () => {
    this.setState({ ...this.state, isEdit: true })
  }
  disableEdit = () => {
    this.setState({ ...this.state, isEdit: false })
    if (this.props.profileStatus !== this.state.status) {
      this.props.changeProfileStatus(this.state.status)
    }
  }
  setStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, status: e.currentTarget.value })
  }
  componentDidMount(): void {
    this.setState({ ...this.state, status: this.props.profileStatus })
  }

  componentDidUpdate(prevProps: Readonly<ComponentPropsType>) {
    if (prevProps.profileStatus !== this.props.profileStatus) {
      this.setState({ ...this.state, status: this.props.profileStatus })
    }
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
              onPressEnter={this.disableEdit}
              autoFocus={true}
              onChange={this.setStatus}
              maxLength={300}
            />
          ) : (
            <Typography.Text>
              <Skeleton loading={this.props.isLoading} paragraph={{ rows: 1 }}>
                {this.props.profileStatus}
              </Skeleton>
            </Typography.Text>
          )}
        </Col>
        <Col>
          {this.props.isOwner && (
            <Button
              type={'text'}
              onClick={this.enableEdit}
              icon={<EditOutlined />}
            >
              {this.props.profileStatus ? '' : 'Add Status.'}
            </Button>
          )}
        </Col>
      </Row>
    )
  }
}

const mapState = (state: RootStateType) => {
  return {
    userId: authSelectors.authUserId(state)!,
    profileStatus: userProfileSelectors.profileStatus(state),
    isLoading: appSelectors.isLoading(state),
  }
}
const mapDispatch = {
  changeProfileStatus: (status: string) =>
    userProfileOperations.changeProfileStatusThunk(status),
}

const connector = connect(mapState, mapDispatch)
export const Status = connector(ProfileStatus)

// Types
type ConnectorType = ConnectedProps<typeof connector>
type ComponentPropsType = ConnectorType & {
  isOwner: boolean
}

type StateType = {
  isEdit: boolean
  status: string
}
