import { DialogMessageType, DialogType } from 'API/api'
import { dialogsOperations, dialogsSelectors } from 'redux/dialogs'

import { Component } from 'react'
import { DialogList } from './DialogList'
import { RootStateType } from 'redux/_store'
import { connect } from 'react-redux'

class Page extends Component<ComponentPropsType> {
  componentDidMount() {
    this.props.fetchDialogList()
  }
  render() {
    return (
      <div>
        <h1>Dialogs page</h1>
        <DialogList dialogList={this.props.dialogList} />
      </div>
    )
  }
}

const mapState = (state: RootStateType): MapStateType => ({
  dialogList: dialogsSelectors.dialogList(state),
  messageList: dialogsSelectors.messageList(state),
  messagesTotalCount: dialogsSelectors.messagesTotalCount(state),
  messagesCurrentPage: dialogsSelectors.messageListCurrentPage(state),
})

const mapDispatch: MapDispatchType = {
  fetchDialogList: () => dialogsOperations.fetchDialogList(),
  fetchMessageList: (userId: number) =>
    dialogsOperations.fetchUserMessageList(userId),
  setMessagesTotalCount: (totalCount: number) =>
    dialogsOperations.setMessagesTotalCount(totalCount),
  changeMessagesCurrentPage: (currentPage: number) =>
    dialogsOperations.setMessageListCurrentPage(currentPage),
}

export const DialogsPage = connect(mapState, mapDispatch)(Page)

// Types
type MapStateType = {
  dialogList: DialogType[]
  messageList: DialogMessageType[]
  messagesTotalCount: number
  messagesCurrentPage: number
}
type MapDispatchType = {
  fetchDialogList: () => void
  fetchMessageList: (userId: number) => void
  setMessagesTotalCount: (totalCount: number) => void
  changeMessagesCurrentPage: (currentPage: number) => void
}
type ComponentPropsType = MapStateType & MapDispatchType
