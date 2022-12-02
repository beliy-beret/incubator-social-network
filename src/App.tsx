import React from 'react';
import { Layout } from 'antd';
import AppBar from "./components/Layout/AppBar/AppBar";
import Navigation from "./components/Layout/Navigation/Navigation";
import {Route} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{maxWidth: '1900px', minHeight: '100%', margin: 'auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
      <Header style={{background: "rgba(191, 180, 143, 0.3)"}}>
        <AppBar />
      </Header>
      <Layout>
        <Sider theme={'light'}>
          <Navigation />
        </Sider>
        <Content style={{padding: '1rem'}}>
          <Route exact path={'/'} component={Home} />
          <Route path={'/profile'} component={Profile} />
          <Route path={'/dialogs'} component={Dialogs} />
          <Route path={'/users'} component={Users} />
        </Content>
      </Layout>
      <Footer style={{textAlign: 'center', padding: '1rem', backgroundColor: 'rgb(191, 180, 143)'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
