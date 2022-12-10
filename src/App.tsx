import React from 'react';
import { Layout } from 'antd';
import AppBar from "./components/Layout/AppBar/AppBar";
import Navigation from "./components/Layout/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";
import {ActionTypes, StateType} from "./redux/_store";

const { Header, Footer, Sider, Content } = Layout;

type ComponentPropsType = {
  state: StateType;
  dispatch: (action: ActionTypes) => void
}

function App({state, dispatch}: ComponentPropsType) {
  return (
    <Layout style={{
      maxWidth: '1900px',
      minHeight: '100%',
      margin: 'auto',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    }}>
      <Header style={{background: "rgba(191, 180, 143, 0.3)"}}>
        <AppBar />
      </Header>
      <Layout>
        <Sider theme={'light'}>
          <Navigation />
        </Sider>
        <Content style={{padding: '1rem'}}>
          <Switch>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/profile'} render={() => <Profile postList={state.profilePage.posts} dispatch={dispatch} />} />
            <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage.dialogs}/>} />
            <Route path={'/users'} component={Users} />
          </Switch>
        </Content>
      </Layout>
      <Footer style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: 'rgb(191, 180, 143)'
      }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
