import React from 'react'
import { Redirect } from 'react-router-dom'
import { RootStateType } from '../redux/_store'
import { connect } from 'react-redux'

interface WrapperType {
  isAuth: boolean
}

const mapState = (state: RootStateType) => ({
  isAuth: state.auth.isAuth,
})

export function withAuthRedirect<T extends object>(
  Component: React.ComponentType<T>
) {
  class WithAuth extends React.Component<WrapperType> {
    render() {
      return this.props.isAuth ? (
        <Component {...(this.props as T)} />
      ) : (
        <Redirect to='/login' />
      )
    }
  }
  return connect(mapState)(WithAuth)
}
