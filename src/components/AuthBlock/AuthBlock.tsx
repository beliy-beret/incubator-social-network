import { Button, Space } from 'antd'
import { authOperations, authSelectors } from 'redux/auth'

import { Link } from 'react-router-dom'
import { PureComponent } from 'react'
import { RootStateType } from '../../redux/_store'
import { connect } from 'react-redux'

type MapDispatchType = {
  signOut: () => void
}

type ComponentPropsType = ReturnType<typeof mapState> & MapDispatchType

const mapState = (state: RootStateType) => {
  return {
    isAuth: authSelectors.isAuth(state),
    authUserLogin: authSelectors.authUserLogin(state),
  }
}
const mapDispatch: MapDispatchType = {
  signOut: authOperations.deleteAuthDataThunk,
}

export class AuthBlock extends PureComponent<ComponentPropsType> {
  render() {
    const { isAuth, authUserLogin, signOut } = this.props
    return (
      <div>
        {isAuth ? (
          <Space>
            <span>{authUserLogin}</span>
            <Button type={'primary'} onClick={signOut}>
              SignOut
            </Button>
          </Space>
        ) : (
          <Button type='primary'>
            <Link to='login'>SignIn</Link>
          </Button>
        )}
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(AuthBlock)
