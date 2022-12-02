import React from 'react';
import { Layout } from 'antd';
import AppBar from "./components/Layout/AppBar/AppBar";
import Navigation from "./components/Layout/Navigation/Navigation";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100%', maxWidth: '1900px', margin: 'auto'}}>
      <Header style={{background: "rgba(191, 180, 143, 0.3)"}}>
        <AppBar />
      </Header>
      <Layout>
        <Sider theme={'light'}>
          <Navigation />
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer style={{textAlign: 'center', padding: '1rem', backgroundColor: 'rgb(191, 180, 143)'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
