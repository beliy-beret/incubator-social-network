import { Component, FC, ReactNode } from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom'
import { appOperations, appSelectors } from 'redux/app'

import { AppBar } from './components/Layout/AppBar/AppBar'
import { Dialogs } from 'pages/Dialogs/Dialogs'
import { Home } from './pages/Home/Home'
import { Layout } from 'antd'
import { Login } from './pages/Auth/Login/Login'
import { Navigation } from './components/Layout/Navigation/Navigation'
import { Preloader } from './components/Preloader/Preloader'
import { ProfileContainer } from './pages/Profile/ProfileContainer'
import { RootStateType } from './redux/_store'
import { UsersConnect } from './pages/Users/UsersConnect'
import { compose } from 'redux'
import { connect } from 'react-redux'

const { Header, Footer, Sider, Content } = Layout

type ComponentPropsType = ReturnType<typeof mapState> &
  MapDispatchType &
  RouteComponentProps

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
                  <Route path={'/dialogs'} component={Dialogs} />
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
  isInitialized: appSelectors.isInitialized(state),
})
const mapDispatch: MapDispatchType = {
  initApp: () => appOperations.initializedAppThunk(),
}

export default compose<FC>(withRouter, connect(mapState, mapDispatch))(App)
