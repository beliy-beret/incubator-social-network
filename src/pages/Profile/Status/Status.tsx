import { ChangeEvent, Component } from 'react'
import {
  changeProfileStatusThunk,
  setProfileStatusThunk,
} from '../../../redux/thunks/profileThunk'

import { RootStateType } from '../../../redux/_store'
import classes from './status.module.css'
import { connect } from 'react-redux'

type ComponentPropsType = PropsType & MapDispatchType

type StateType = {
  isEdit: boolean
  status: string
}

class ProfileStatus extends Component<ComponentPropsType, StateType> {
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
      <div className={classes.status}>
        {this.state.isEdit ? (
          <input
            type='text'
            value={this.state.status}
            onBlur={this.disableEdit}
            autoFocus={true}
            onChange={this.setStatus}
          />
        ) : (
          <span>{this.props.profileStatus}</span>
        )}
        <button onClick={this.enableEdit}>
          {this.props.profileStatus ? '...' : 'Add Status.'}
        </button>
      </div>
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
    userId: state.auth.authData.id!,
    profileStatus: state.profilePage.status,
  }
}
const mapDispatch = {
  getProfileStatus: (userId: number) => setProfileStatusThunk(userId),
  changeProfileStatus: (status: string) => changeProfileStatusThunk(status),
}

export const Status = connect(mapState, mapDispatch)(ProfileStatus)
