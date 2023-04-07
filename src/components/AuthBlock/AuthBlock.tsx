import { Button, Space } from 'antd'
import { authOperations, authSelectors } from 'redux/auth'

import { Component } from 'react'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../redux/_store'
import { connect } from 'react-redux'

type MapDispatchType = {
  signOut: () => void
}

type ComponentPropsType = ReturnType<typeof mapState> & MapDispatchType

const mapState = (state: RootStateType) => {
  return {
    isAuth: authSelectors.isAuth(state),
    authData: authSelectors.authData(state),
  }
}
const mapDispatch: MapDispatchType = {
  signOut: authOperations.deleteAuthDataThunk,
}

export class AuthBlock extends Component<ComponentPropsType> {
  render() {
    const { isAuth, authData, signOut } = this.props
    return (
      <div>
        {isAuth ? (
          <Space>
            <span>{authData.login}</span>
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
