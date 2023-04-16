import { Col, Divider, Row } from 'antd'
import { ConnectedProps, connect } from 'react-redux'
import { FC, PureComponent } from 'react'
import {
  subscriptionsOperations,
  subscriptionsSelectors,
} from 'redux/subscriptions'

import { MyPagination } from 'components/MyPagination/MyPagination'
import { Preloader } from 'components/Preloader/Preloader'
import { RootStateType } from 'redux/_store'
import { UserList } from 'pages/Users/UserList/UserList'
import { appSelectors } from 'redux/app'
import { compose } from 'redux'
import { dialogsOperations } from 'redux/dialogs'
import { withAuthRedirect } from 'HOC/WithAuthRedirect'

class Component extends PureComponent<ComponentPropsType> {
  getUsers = () => this.props.fetchUserList(this.props.currentPage)
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
              changePageNumber={this.props.changePage}
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
              toggleSubscription={this.props.unsubscribe}
              sendMessage={this.props.sendMessage}
            />
          </Col>
        </Row>
      </>
    )
  }
}

const mapState = (state: RootStateType) => ({
  totalCount: subscriptionsSelectors.totalCount(state),
  currentPage: subscriptionsSelectors.currentPage(state),
  userList: subscriptionsSelectors.userList(state),
  isLoading: appSelectors.isLoading(state),
})

const mapDispatch = {
  fetchUserList: (page: number) =>
    subscriptionsOperations.fetchSubscriptions(page),
  changePage: (currentPage: number) =>
    subscriptionsOperations.setCurrentPage(currentPage),
  unsubscribe: (userId: number) => subscriptionsOperations.unsubscribe(userId),
  sendMessage: (userId: number, message: string) =>
    dialogsOperations.sendMessage(userId, message),
}
const connector = connect(mapState, mapDispatch)

export const Subscriptions = compose<FC>(withAuthRedirect, connector)(Component)

// Types
type ConnectorType = ConnectedProps<typeof connector>
type ComponentPropsType = ConnectorType
