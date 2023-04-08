import { Col, Row } from 'antd'
import { DialogMessageType, DialogType } from 'API/api'
import { dialogsOperations, dialogsSelectors } from 'redux/dialogs'

import { Component, FC } from 'react'
import { DialogList } from './DialogList/DialogList'
import { RootStateType } from 'redux/_store'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from 'HOC/WithAuthRedirect'
import { MessageList } from './MessageList/MessageList'
import { authSelectors } from 'redux/auth'

class Page extends Component<ComponentPropsType> {
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
      <Row>
        <Col
          span={8}
          style={{
            borderRight: '2px solid black',
            maxHeight: '84.7vh',
            overflowY: 'scroll',
          }}
        >
          <DialogList
            dialogList={this.props.dialogList}
            activeDialogHandler={this.getActiveDialogMessageList}
            activeDialogId={this.props.activeDialogId}
          />
        </Col>
        <Col span={16}>
          <MessageList
            messageList={this.props.messageList}
            authUserId={this.props.authUserId}
          />
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
}
type MapDispatchType = {
  fetchDialogList: () => void
  fetchMessageList: (userId: number) => void
  changeMessagesCurrentPage: (currentPage: number) => void
}
type ComponentPropsType = MapStateType & MapDispatchType
