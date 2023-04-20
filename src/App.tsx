import { Component, FC, ReactNode, lazy } from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom'
import { appOperations, appSelectors } from 'redux/app'

import { AppBar } from './components/Layout/AppBar/AppBar'
import Home from './pages/Home/Home'
import { Layout } from 'antd'
import { Navigation } from './components/Layout/Navigation/Navigation'
import { Preloader } from './components/Preloader/Preloader'
import { RootStateType } from './redux/_store'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withSuspense } from 'HOC/WithSuspense'

const { Header, Footer, Sider, Content } = Layout

const Users = lazy(() => import('pages/Users/Users'))
const Profile = lazy(() => import('pages/Profile/Profile'))
const Subscriptions = lazy(() => import('pages/Subscriptions/Subscriptions'))
const Dialogs = lazy(() => import('pages/Dialogs/Dialogs'))
const Login = lazy(() => import('pages/Dialogs/Dialogs'))

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
        {!this.props.isInitialized ? (
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
                  <Route
                    path={'/profile/:id?'}
                    component={withSuspense(Profile)}
                  />
                  <Route
                    path={'/dialogs/:id?'}
                    component={withSuspense(Dialogs)}
                  />
                  <Route path={'/users'} component={withSuspense(Users)} />
                  <Route path={'/login'} component={withSuspense(Login)} />
                  <Route
                    path={'/subscriptions'}
                    component={withSuspense(Subscriptions)}
                  />
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
