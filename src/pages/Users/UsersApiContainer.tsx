import { Component } from 'react'
import { getUserList, subscribe, unsubscribe } from '../../API/api'
import { UserPage } from './UserPage'
import { Preloader } from '../../components/Preloader/Preloader'
import { UserConnectType } from './UsersContainer'
import { ResponseStatus } from '../../AppTypes'

type ComponentPropsType = UserConnectType

export class UsersApiContainer extends Component<ComponentPropsType> {
  getUsers = () => {
    this.props.toggleIsLoading(true)
    getUserList(this.props.currentPage)
      .then((data) => {
        this.props.setUsers(data?.items!)
        this.props.setTotalCount(data?.totalCount!)
        setTimeout(() => this.props.toggleIsLoading(false), 300)
      })
      .catch(() => this.props.toggleIsLoading(false))
  }

  subscribeToUser = (userId: number) => {
    this.props.toggleIsLoading(true)
    subscribe(userId)
      .then((data) => {
        if (data?.resultCode === ResponseStatus.SUCCESS) {
          this.props.toggleFollow(userId, true)
          setTimeout(() => this.props.toggleIsLoading(false), 300)
        } else {
          console.error(data?.messages[0])
          this.props.toggleIsLoading(false)
        }
      })
      .catch(() => this.props.toggleIsLoading(false))
  }

  unsubscribeUser = (userId: number) => {
    this.props.toggleIsLoading(true)
    unsubscribe(userId)
      .then((data) => {
        if (data?.resultCode === ResponseStatus.SUCCESS) {
          this.props.toggleFollow(userId, false)
          setTimeout(() => this.props.toggleIsLoading(false), 300)
        } else {
          console.error(data?.messages[0])
          this.props.toggleIsLoading(false)
        }
      })
      .catch(() => this.props.toggleIsLoading(false))
  }

  toggleSubscription = (userId: number) => {
    const user = this.props.userList.find((item) => item.id === userId)
    user?.followed ? this.unsubscribeUser(userId) : this.subscribeToUser(userId)
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
