import { Col, Divider, Row } from 'antd'
import { ConnectedProps, connect } from 'react-redux'
import { usersOperations, usersSelectors } from 'redux/users'

import { MyPagination } from 'components/MyPagination/MyPagination'
import { Preloader } from '../../components/Preloader/Preloader'
import { PureComponent } from 'react'
import { RootStateType } from 'redux/_store'
import { UserList } from './UserList/UserList'
import { appSelectors } from 'redux/app'
import { dialogsOperations } from 'redux/dialogs'

class Container extends PureComponent<ComponentPropsType> {
  getUsers = () => this.props.getUserList(this.props.currentPage)

  toggleSubscription = (userId: number) => {
    const user = this.props.userList.find((item) => item.id === userId)
    user?.followed
      ? this.props.unsubscribeUser(userId)
      : this.props.subscribeToUser(userId)
  }

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate(prevProps: Readonly<ComponentPropsType>) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.getUsers()
    }
  }

  render() {
    return (
      <>
        {this.props.isLoading && <Preloader />}

        <Row justify={'center'}>
          <Col span={20} style={{ paddingTop: '10px' }}>
            <MyPagination
              totalCount={this.props.totalCount}
              pageSize={10}
              currentPage={this.props.currentPage}
              changePageNumber={this.props.setCurrentPage}
            />
          </Col>
        </Row>
        <Divider />
        <Row justify={'center'}>
          <Col
            span={24}
            style={{
              maxHeight: '80vh',
              overflowY: 'scroll',
              padding: '16px',
            }}
          >
            <UserList
              userList={this.props.userList}
              toggleSubscription={this.toggleSubscription}
              sendMessage={this.props.sendMessage}
            />
          </Col>
        </Row>
      </>
    )
  }
}

const mapState = (state: RootStateType) => ({
  userList: usersSelectors.userList(state),
  totalCount: usersSelectors.totalCount(state),
  currentPage: usersSelectors.currentPage(state),
  isLoading: appSelectors.isLoading(state),
})

const mapDispatch = {
  setCurrentPage: (page: number) => usersOperations.setCurrentPage(page),
  getUserList: (currentPage: number) =>
    usersOperations.getUsersThunk(currentPage),
  subscribeToUser: (userId: number) =>
    usersOperations.subscribeToUserThunk(userId),
  unsubscribeUser: (userId: number) =>
    usersOperations.unsubscribeUserThunk(userId),
  sendMessage: (userId: number, message: string) =>
    dialogsOperations.sendMessage(userId, message),
}

const connector = connect(mapState, mapDispatch)

export const Users = connector(Container)
// Types
type ConnectorType = ConnectedProps<typeof connector>
type ComponentPropsType = ConnectorType
