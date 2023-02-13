import React from 'react'
import { Redirect } from 'react-router-dom'

interface HocProps {
  isAuth: boolean
}

export function withAuthRedirect<T>(Child: React.ComponentType<T>) {
  return class WithAuth extends React.Component<T & HocProps> {
    render() {
      return this.props.isAuth ? (
        <Child {...this.props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  }
}
