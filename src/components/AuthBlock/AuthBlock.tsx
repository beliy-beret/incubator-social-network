import { Component } from 'react'
import { MyLoadingButton } from '../MyLoadingButton/MyLoadingButton'
import { RootStateType } from '../../redux/_store'
import { checkIsAuthThunk } from '../../redux/thunks/authThunk'
import { connect } from 'react-redux'

type MapDispatchType = {
  checkIsAuth: () => void
}

type ComponentPropsType = ReturnType<typeof mapState> & MapDispatchType

const mapState = (state: RootStateType) => {
  return {
    isAuth: state.auth.isAuth,
    authData: state.auth.authData,
  }
}
const mapDispatch: MapDispatchType = {
  checkIsAuth: () => checkIsAuthThunk(),
}

export class AuthBlock extends Component<ComponentPropsType> {
  componentDidMount() {
    this.props.checkIsAuth()
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
