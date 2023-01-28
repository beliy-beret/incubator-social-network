import { Component } from 'react'
import { Preloader } from '../../components/Preloader/Preloader'
import { UserConnectType } from './UsersConnect'
import { UserPage } from './UserPage'

type ComponentPropsType = UserConnectType

export class UsersContainer extends Component<ComponentPropsType> {
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
        <UserPage
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          userList={this.props.userList}
          toggleSubscription={this.toggleSubscription}
        />
      </>
    )
  }
}
