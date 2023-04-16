import { ConnectedProps, connect } from 'react-redux'
import { FC, PureComponent, ReactNode } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { authOperations, authSelectors } from 'redux/auth'

import { AuthFormDataType } from 'API/api'
import { LoginForm } from '../LoginForm/LoginForm'
import { Preloader } from '../../../components/Preloader/Preloader'
import { RootStateType } from '../../../redux/_store'
import { appSelectors } from 'redux/app'
import { compose } from 'redux'

class LoginPage extends PureComponent<ComponentPropsType> {
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

const mapState = (state: RootStateType) => ({
  isAuth: authSelectors.isAuth(state),
  submitErrorMessage: appSelectors.errorMessage(state),
  captchaUrl: authSelectors.captchaUrl(state),
  isLoading: appSelectors.isLoading(state),
})

const mapDispatch = {
  sendFormData: (formData: AuthFormDataType) =>
    authOperations.postAuthorizationDataThunk(formData),
}

const connector = connect(mapState, mapDispatch)
export const Login = compose<FC>(connector, withRouter)(LoginPage)

// Types
type ConnectorType = ConnectedProps<typeof connector>
type ComponentPropsType = RouteComponentProps & ConnectorType
