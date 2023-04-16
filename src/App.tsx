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
import { Profile } from 'pages/Profile/Profile'
import { RootStateType } from './redux/_store'
import { Subscriptions } from 'pages/Subscriptions/Subscriptions'
import { Users } from 'pages/Users/Users'
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
              minHeight: '100vh',
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
              <Content>
                <Switch>
                  <Route exact={true} path={'/'} component={Home} />
                  <Route path={'/profile/:id?'} component={Profile} />
                  <Route path={'/dialogs/:id?'} component={Dialogs} />
                  <Route path={'/users'} component={Users} />
                  <Route path={'/login'} component={Login} />
                  <Route path={'/subscriptions'} component={Subscriptions} />
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
