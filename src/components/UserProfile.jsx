import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';
import { articlesAction } from '../store/actions';
import history from '../history';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;

const UserProfile = () => {
  const { pageSize, user } = useSelector(state => ({
    pageSize: state.pageSettings.pageSize,
    params: state.articles.params,
    user: state.user.user,
  }));
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      style={{ width: 240, marginRight: '10px' }}
      title={<Avatar size={64} icon={<UserOutlined />} />}
    >
      <Meta title={user.username} description={user.email} />
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => {
          dispatch(articlesAction({ author: user.username }));
        }}
      >
        Show my articles
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => dispatch(articlesAction({ limit: pageSize }))}
      >
        Show all articles
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() =>
          dispatch(articlesAction({ limit: pageSize, favorited: user.username }))
        }
      >
        Show liked
      </Button>
      <Button
        style={{ marginTop: '20px', width: '100%' }}
        type="primary"
        onClick={() => history.push('/add')}
      >
        Add new article
      </Button>
    </Card>
  );
};

export default UserProfile;
