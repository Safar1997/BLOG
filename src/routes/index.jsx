import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from '../components/Header';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Article from './Article';
import ArticleEdit from './ArticleEdit';
import AddArticle from './AddArticle';

const { Header, Content } = Layout;

const Routes = () => {
  return (
    <Layout className="layout" style={{ maxWidth: '1440px', backgroundColor: 'white' }}>
      <Header>
        <div className="logo" />
        <Navbar />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddArticle} />
          <Route path="/articles/:slug/edit" component={ArticleEdit} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/articles/:slug" component={Article} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default Routes;
