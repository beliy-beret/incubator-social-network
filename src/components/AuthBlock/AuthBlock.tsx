import { Component } from 'react'
import { connect } from 'react-redux'
import { checkIsAuth } from '../../API/api'
import { AuthDataType, ResponseStatus } from '../../AppTypes'
import { setAuthDataAC } from '../../redux/actions/authActions'
import { RootStateType } from '../../redux/_store'
import { MyLoadingButton } from '../MyLoadingButton/MyLoadingButton'

type ComponentPropsType = ReturnType<typeof mapState> & typeof mapDispatch

const mapState = (state: RootStateType) => {
  return {
    isAuth: state.auth.isAuth,
    authData: state.auth.authData,
  }
}
const mapDispatch = {
  setAuthData: (authData: AuthDataType) => setAuthDataAC(authData),
}

export class AuthBlock extends Component<ComponentPropsType> {
  componentDidMount() {
    checkIsAuth()
      .then((resp) => {
        if (resp?.resultCode === ResponseStatus.SUCCESS) {
          this.props.setAuthData(resp.data)
        }
      })
      .catch((e) => console.error(e))
  }

  render() {
    const { isAuth, authData } = this.props
    return (
      <div>
        {isAuth ? (
          <span>{authData.login}</span>
        ) : (
          <MyLoadingButton text='signIn' />
        )}
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(AuthBlock)
