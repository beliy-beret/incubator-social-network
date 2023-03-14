import { Component, FC, ReactNode } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { AuthFormDataType } from '../../../AppTypes'
import { LoginForm } from '../LoginForm/LoginForm'
import { Preloader } from '../../../components/Preloader/Preloader'
import { RootStateType } from '../../../redux/_store'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { signInThunk } from '../../../redux/thunks/authThunk'

type ComponentPropsType = RouteComponentProps & MapProps & MapDispatch

class LoginPage extends Component<ComponentPropsType> {
  componentDidUpdate(prevProps: Readonly<ComponentPropsType>): void {
    if (prevProps.isAuth !== this.props.isAuth) {
      this.props.history.push('/profile')
    }
  }
  render(): ReactNode {
    return (
      <>
        <LoginForm
          submit={this.props.sendFormData}
          captchaUrl={this.props.captchaUrl}
          submitErrorMessage={this.props.submitErrorMessage}
        />
        {this.props.isLoading && <Preloader />}
      </>
    )
  }
}

type MapProps = {
  isAuth: boolean
  submitErrorMessage: string
  captchaUrl: string
  isLoading: boolean
}

type MapDispatch = {
  sendFormData: (formData: AuthFormDataType) => void
}

const mapState = (state: RootStateType): MapProps => ({
  isAuth: state.auth.isAuth,
  submitErrorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl,
  isLoading: state.auth.isLoading,
})

const mapDispatch: MapDispatch = {
  sendFormData: (formData: AuthFormDataType) => signInThunk(formData),
}
export const Login = compose<FC>(
  connect(mapState, mapDispatch),
  withRouter
)(LoginPage)
