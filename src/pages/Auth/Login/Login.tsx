import { Component, FC, ReactNode } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { authOperations, authSelectors } from 'redux/auth'

import { AuthFormDataType } from 'API/api'
import { LoginForm } from '../LoginForm/LoginForm'
import { Preloader } from '../../../components/Preloader/Preloader'
import { RootStateType } from '../../../redux/_store'
import { appSelectors } from 'redux/app'
import { compose } from 'redux'
import { connect } from 'react-redux'

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
  isAuth: authSelectors.isAuth(state),
  submitErrorMessage: appSelectors.errorMessage(state),
  captchaUrl: authSelectors.captchaUrl(state),
  isLoading: appSelectors.isLoading(state),
})

const mapDispatch: MapDispatch = {
  sendFormData: (formData: AuthFormDataType) =>
    authOperations.postAuthorizationDataThunk(formData),
}
export const Login = compose<FC>(
  connect(mapState, mapDispatch),
  withRouter
)(LoginPage)
