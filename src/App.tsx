import { Component, ReactNode } from 'react'
import { Route, Switch } from 'react-router-dom'

import { AppBar } from './components/Layout/AppBar/AppBar'
import { DialogsContainer } from './pages/Dialogs/DialogsContainer'
import { Home } from './pages/Home/Home'
import { Layout } from 'antd'
import { Login } from './pages/Auth/Login/Login'
import { Navigation } from './components/Layout/Navigation/Navigation'
import { Preloader } from './components/Preloader/Preloader'
import { ProfileContainer } from './pages/Profile/ProfileContainer'
import { RootStateType } from './redux/_store'
import { UsersConnect } from './pages/Users/UsersConnect'
import { connect } from 'react-redux'
import { initAppThunk } from './redux/thunks/appThunk'

const { Header, Footer, Sider, Content } = Layout

type ComponentPropsType = ReturnType<typeof mapState> & MapDispatchType

class App extends Component<ComponentPropsType> {
  componentDidMount() {
    this.props.initApp()
  }

  render(): ReactNode {
    return (
      <>
        {!this.props.initApp ? (
          <Preloader />
        ) : (
          <Layout
            style={{
              maxWidth: '1900px',
              minHeight: '100%',
              margin: 'auto',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            }}
          >
            <Header style={{ background: 'rgba(191, 180, 143, 0.3)' }}>
              <AppBar />
            </Header>
            <Layout>
              <Sider theme={'light'}>
                <Navigation />
              </Sider>
              <Content style={{ padding: '1rem' }}>
                <Switch>
                  <Route exact={true} path={'/'} component={Home} />
                  <Route path={'/profile/:id?'} component={ProfileContainer} />
                  <Route path={'/dialogs'} component={DialogsContainer} />
                  <Route path={'/users'} component={UsersConnect} />
                  <Route path={'/login'} component={Login} />
                </Switch>
              </Content>
            </Layout>
            <Footer
              style={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'rgb(191, 180, 143)',
              }}
            >
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        )}
      </>
    )
  }
}

type MapDispatchType = {
  initApp: () => void
}

const mapState = (state: RootStateType) => ({
  isInitialized: state.app.isInitialized,
})
const mapDispatch: MapDispatchType = {
  initApp: () => initAppThunk(),
}

export default connect(mapState, mapDispatch)(App)
