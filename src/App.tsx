import { Route, Switch } from 'react-router-dom'

import { AppBar } from './components/Layout/AppBar/AppBar'
import { DialogsContainer } from './pages/Dialogs/DialogsContainer'
import { FC } from 'react'
import { Home } from './pages/Home/Home'
import { Layout } from 'antd'
import { Navigation } from './components/Layout/Navigation/Navigation'
import { ProfileContainer } from './pages/Profile/ProfileContainer'
import { UsersConnect } from './pages/Users/UsersConnect'

const { Header, Footer, Sider, Content } = Layout

export const App: FC = () => {
  return (
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
  )
}
