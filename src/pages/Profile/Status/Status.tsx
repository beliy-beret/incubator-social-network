import { Component } from 'react'
import classes from './status.module.css'

type ComponentPropsType = {
  userId: number
}
type StateType = {
  isEdit: boolean
  status: string
}

export class Status extends Component<ComponentPropsType, StateType> {
  state = {
    isEdit: false,
    status: 'User status',
  }
  enableEdit = () => {
    this.setState({ isEdit: true })
  }
  disableEdit = () => {
    this.setState({ isEdit: false })
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
          />
        ) : (
          <span>{this.state.status}</span>
        )}
        <button onClick={this.enableEdit}>...</button>
      </div>
    )
  }
}
