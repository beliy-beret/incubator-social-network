import { Button, Space } from 'antd'

import { Component } from 'react'
import { Link } from 'react-router-dom'
import { RootStateType } from '../../redux/_store'
import { connect } from 'react-redux'
import { deleteAuthDataThunk } from '../../redux/thunks/authThunk'

type MapDispatchType = {
  signOut: () => void
}

type ComponentPropsType = ReturnType<typeof mapState> & MapDispatchType

const mapState = (state: RootStateType) => {
  return {
    isAuth: state.auth.isAuth,
    authData: state.auth.authData,
  }
}
const mapDispatch: MapDispatchType = {
  signOut: deleteAuthDataThunk,
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
