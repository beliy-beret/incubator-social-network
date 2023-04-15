import { Col, Divider, Row } from 'antd'
import { DialogMessageType, DialogType } from 'API/api'
import { FC, PureComponent } from 'react'
import { dialogsOperations, dialogsSelectors } from 'redux/dialogs'

import { DialogList } from './DialogList/DialogList'
import { MessageForm } from './MessageList/MessageForm/MessageForm'
import { MessageList } from './MessageList/MessageList'
import { RootStateType } from 'redux/_store'
import { appSelectors } from 'redux/app'
import { authSelectors } from 'redux/auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from 'HOC/WithAuthRedirect'

class Page extends PureComponent<ComponentPropsType> {
  componentDidMount() {
    this.props.fetchDialogList()
  }

  getActiveDialogMessageList = (userId: number) => {
    this.props.fetchMessageList(userId)
  }

  render() {
    if (!this.props.dialogList) {
      return (
        <div>
          <h2>Dialog list empty.</h2>
        </div>
      )
    }
    return (
      <Row gutter={16} justify='space-between'>
        <Col
          span={7}
          style={{
            height: '84.7vh',
            overflowY: 'scroll',
          }}
        >
          <DialogList
            dialogList={this.props.dialogList}
            activeDialogHandler={this.getActiveDialogMessageList}
            activeDialogId={this.props.activeDialogId}
          />
        </Col>
        <Divider
          type={'vertical'}
          style={{ border: '2px solid #595757', height: '84vh' }}
        />
        <Col span={15}>
          <Row>
            <Col
              span={24}
              style={{
                height: '75vh',
                overflowY: 'scroll',
              }}
            >
              <MessageList
                messageList={this.props.messageList}
                authUserId={this.props.authUserId}
              />
            </Col>
            <Divider />
            <Col span={24}>
              <MessageForm
                errorMessage={this.props.errorMessage}
                submit={() => ({})}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapState = (state: RootStateType): MapStateType => ({
  dialogList: dialogsSelectors.dialogList(state),
  messageList: dialogsSelectors.messageList(state),
  messagesTotalCount: dialogsSelectors.messagesTotalCount(state),
  messagesCurrentPage: dialogsSelectors.messageListCurrentPage(state),
  activeDialogId: dialogsSelectors.activeDialogId(state),
  authUserId: authSelectors.authUserId(state),
  errorMessage: appSelectors.errorMessage(state),
})

const mapDispatch: MapDispatchType = {
  fetchDialogList: () => dialogsOperations.fetchDialogList(),
  fetchMessageList: (userId: number) =>
    dialogsOperations.fetchUserMessageList(userId),
  changeMessagesCurrentPage: (currentPage: number) =>
    dialogsOperations.setMessageListCurrentPage(currentPage),
}

export const DialogsPage = compose<FC>(
  withAuthRedirect,
  connect(mapState, mapDispatch)
)(Page)

// Types
type MapStateType = {
  dialogList: DialogType[]
  messageList: DialogMessageType[]
  messagesTotalCount: number
  messagesCurrentPage: number
  activeDialogId: number | null
  authUserId: number | null
  errorMessage: string
}
type MapDispatchType = {
  fetchDialogList: () => void
  fetchMessageList: (userId: number) => void
  changeMessagesCurrentPage: (currentPage: number) => void
}
type ComponentPropsType = MapStateType & MapDispatchType
